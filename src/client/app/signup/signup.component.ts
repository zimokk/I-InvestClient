import { Component } from '@angular/core';

import { UserService } from '../servicies/user.service';
import { AuthService } from '../servicies/auth.service';
import {NotificationsService} from "angular2-notifications/components";

@Component({
	moduleId: module.id,
	selector: 'signup-cmp',
	templateUrl: 'signup.component.html',
  providers: [UserService, AuthService]
})

export class SignupComponent {
  constructor(private userService: UserService, private authService: AuthService, private  notificationService: NotificationsService){
  }

  onSubmit(){
    console.dir(this.login);
    let self = this;
    self.notificationService.alert("title","content");
    console.dir(this.notificationService);
  }

  register(event): void{
    console.dir(this);
    debugger;
    if(password == repeatedPassword){
      this.userService.register(this.login, this.password);
    }
  }
}
