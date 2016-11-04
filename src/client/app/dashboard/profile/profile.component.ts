import {Component} from '@angular/core';
import {LoaderComponent} from "../../shared/loader/loader.component";
import { NDV_DIRECTIVES } from 'angular2-click-to-edit/components';
import {UserService} from "../../servicies/user.service";
import {NotificationsService} from "angular2-notifications/components";
import {AuthService} from "../../servicies/auth.service";

@Component({
  moduleId: module.id,
  selector: 'profile-cmp',
  templateUrl: 'profile.component.html',
  directives: [LoaderComponent, NDV_DIRECTIVES]
})

export class ProfileComponent {

  public user={};
  public isLoading = true;

  constructor(
    private userService: UserService,
    private notificationService: NotificationsService,
    private authService: AuthService) {

  }

  ngOnInit(){
    let self = this;
    this.userService.getByLogin(this.authService.getCurrentUser()).then(
      result => {
        self.user = result.data;
        self.user.id = result.data._id;
        self.toggleLoader();
      }
    );
  }

  saveChanges(){
    let self = this;
    this.userService.update(this.user).then(
      result => {
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