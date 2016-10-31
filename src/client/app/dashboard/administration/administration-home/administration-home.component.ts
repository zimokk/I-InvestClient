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
        self.user = result.result;
        self.notificationService.success("Success", "User removed");
      } else{
        self.notificationService.error("Error", "An error occured");
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
        self.users = result.result;
      } else {
        self.notificationService.error("Error", "An error quering users list");
      }
      self.toggleLoader();
    })
  }
  
  private toggleLoader(): void{
    let self = this;
    setTimeout(function () {
      self.isLoading = !self.isLoading;
    }, 500)
  }
}
