import { Component } from '@angular/core';
import {UserService} from "../../servicies/user.service";
import {NotificationsService} from "angular2-notifications/components";

@Component({
  moduleId: module.id,
  selector: 'administration-cmp',
  templateUrl: 'administration.component.html'
})

export class AdministrationComponent {
  public users = [];

  constructor(private userService: UserService, private  notificationService: NotificationsService) {
  }

  ngOnInit(){
    this.getUsers();
  }

  public removeUser(user) :void{
    let self = this;
    this.userService.remove(user._id).then(function (result) {
      if(result.statusCode == 0){
        self.user = result.result;
        self.notificationService.success("Success", "User removed");
      } else{
        self.notificationService.error("Error", "An error occured");
        self.users.push(user);
      }
    });
    this.users.splice(this.users.indexOf(user),1);
  }

  public getUsers():void{
    let self = this;
    this.userService.getAll().then(function (result) {
      if(result.statusCode == 0){
        self.users = result.result;
        console.dir(self.users);
      }
    })
  }

}
