import {Component} from '@angular/core';
import {LoaderComponent} from "../../shared/loader/loader.component";
import { NDV_DIRECTIVES } from 'angular2-click-to-edit/components';
import {UserService} from "../../servicies/user.service";
import {NotificationsService} from "angular2-notifications/components";
import {AuthService} from "../../servicies/auth.service";
import {WorkplaceService} from "../../servicies/workplace.service";

@Component({
  moduleId: module.id,
  selector: 'profile-cmp',
  templateUrl: 'profile.component.html',
  directives: [LoaderComponent, NDV_DIRECTIVES]
})

export class ProfileComponent {

  public user={};
  public isLoading = true;
  public workplaces = [];

  constructor(
    private userService: UserService,
    private notificationService: NotificationsService,
    private authService: AuthService,
    private workplaceService: WorkplaceService) {

  }

  ngOnInit(){
    let self = this;
    this.userService.getByLogin(this.authService.getCurrentUser()).then(
      result => {
        self.user = result.data;
        self.user.id = result.data._id;
        self.workplaceService.getByUser(self.user.id).then(function (result) {
          if(result.statusCode == 0){
            self.workplaces = result.data;
            self.toggleLoader();
          }
        });
      }
    );
  }

  saveChanges(){
    let self = this;
    self.toggleLoader();
    this.userService.update(this.user).then(
      function(result){
        if(result.data){
          self.authService.setCurrentUser(result.data);
          self.toggleLoader();
        }
      }
    );
  }

  saveEditable(event){
    if(event['email']){
      this.user.email = event['email'];
    } else {
      this.user.age = event['age']
    }
  }

  addWorkplace(){
    let self = this;
    self.toggleLoader();
    let newWorkplace = {
      company : self.company,
      duration : self.duration,
      userId: self.user.id
    };
    self.workplaceService.add(newWorkplace).then(function (result) {
      if(result.statusCode == 0){
        self.workplaces.push(result.data);
        self.company = "";
        self.duration = "";
        self.toggleLoader();
      }
    }, function (error) {
      console.log(error);
    });
  }

  deleteWorkplace(workplace){
    let self = this;
    self.toggleLoader();
    this.workplaceService.remove(workplace._id).then(function (result) {
      if(result.statusCode == 0){
        self.workplaces.splice(self.workplaces.indexOf(workplace), 1);
        self.toggleLoader();
      }
    });
  }

  private toggleLoader(): void{
    let self = this;
    if(!this.isLoading){
      self.isLoading = true;
    } else{
      setTimeout(function () {
        self.isLoading = false;
      }, 500)
    }
  }
}
