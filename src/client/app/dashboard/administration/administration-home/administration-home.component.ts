import { Component } from '@angular/core';
import {UserService} from "../../../servicies/user.service";
import {NotificationsService} from "angular2-notifications/components";

@Component({
  moduleId: module.id,
  selector: 'administration-home-cmp',
  templateUrl: 'administration-home.component.html'
})

export class AdministrationHomeComponent {
  public users = [];
  public isLoading = true;

  constructor(private userService: UserService, private  notificationService: NotificationsService) {
  }

  ngOnInit(){
    this.getUsers();
  }

  public removeUser(user) :void{
    let self = this;
    self.toggleLoader();
    this.userService.remove(user._id).then(function (result) {
      if(result.statusCode == 0){
        self.user = result.data;
        self.notificationService.success("Success", "User removed");
      } else if(result.statusCode == 404){
        self.notificationService.error("Error",registrationResult.message);
      } else{
        self.notificationService.error("Error", "An error occurred");
        self.users.push(user);
      }
      self.toggleLoader();
    });
    this.users.splice(this.users.indexOf(user),1);
  }

  public getUsers():void{
    let self = this;
    this.userService.getAll().then(function (result) {
      if(result.statusCode == 0){
        self.users = result.data;
      } else if(result.statusCode == 404){
        self.notificationService.error("Error",registrationResult.message);
      } else {
        self.notificationService.error("Error", "An error querying users list");
      }
      self.toggleLoader();
    })
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

  public toggleBan(user):void{
    if(user.isBanned){
      this.enable(user);
    }else{
      this.ban(user);
    }
  }

  public enable(user) :void{
    let self = this;
    self.toggleLoader();
    this.userService.enable(user._id).then(function (result) {
      if(result.statusCode == 0){
        self.user = result.data;
        self.notificationService.success("Success", "User account enabled");
      } else if(result.statusCode == 404){
        self.notificationService.error("Error",registrationResult.message);
      } else{
        self.notificationService.error("Error", "An error occurred");
        user.isBanned = true;
      }
      self.toggleLoader();
    });
    user.isBanned = false;
  }

  public ban(user) :void{
    let self = this;
    self.toggleLoader();
    this.userService.ban(user._id).then(function (result) {
      if(result.statusCode == 0){
        self.user = result.data;
        self.notificationService.success("Success", "User banned");
      } else if(result.statusCode == 404){
        self.notificationService.error("Error",registrationResult.message);
      } else{
        self.notificationService.error("Error", "An error occurred");
        user.isBanned = false;
      }
      self.toggleLoader();
    });
    user.isBanned = true;
  }
}
