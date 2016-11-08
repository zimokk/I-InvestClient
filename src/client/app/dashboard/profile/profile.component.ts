import {Component} from '@angular/core';
import {LoaderComponent} from "../../shared/loader/loader.component";
import { NDV_DIRECTIVES } from 'angular2-click-to-edit/components';
import {UserService} from "../../servicies/user.service";
import {NotificationsService} from "angular2-notifications/components";
import {AuthService} from "../../servicies/auth.service";
import {WorkplaceService} from "../../servicies/workplace.service";
import {MessagesService} from "../../servicies/message.service";
import {SelectComponent} from "ng2-select/ng2-select";

@Component({
  moduleId: module.id,
  selector: 'profile-cmp',
  templateUrl: 'profile.component.html',
  directives: [LoaderComponent, NDV_DIRECTIVES, SelectComponent]
})

export class ProfileComponent {

  public user={};
  public isLoading = true;
  public workplaces = [];
  public sentMessages = [];
  public inbox = [];
  public pageNumberSent:number = 2;
  public users = ['1','2'];

  constructor(
    private userService: UserService,
    private notificationService: NotificationsService,
    private authService: AuthService,
    private workplaceService: WorkplaceService,
    private messagesService: MessagesService) {

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
          }
        });
        self.messagesService.getByAuthor(self.user.id).then(function (result) {
          if(result.statusCode == 0){
            self.sentMessages = result.data;
          }
        });
        self.messagesService.getByReceiver(self.user.id).then(function (result) {
          if(result.statusCode == 0){
            self.inbox = result.data;
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

  removeMessage(message):void{
    let self = this;
    self.toggleLoader();
    self.messagesService.remove(message._id).then(function (result) {
      if(result.statusCode == 0){
        let inboxIndex = self.inbox.indexOf(message);
        if(inboxIndex != -1){
          self.inbox.splice(inboxIndex, 1)
        } else{
          self.sentMessages.splice(self.sentMessages.indexOf(message), 1)
        }
        self.toggleLoader();
      }
    });
  }

  selected(event){
    console.log(event);
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
