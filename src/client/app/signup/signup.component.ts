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
    let self = this;
    if(this.password == this.repeatedPassword){
      this.userService.register(this.login, this.password).then(function (registrationResult) {
        if(registrationResult){
          self.notificationService.success("Successful registration","Enter, using your login & password");
        } else{
          self.notificationService.error("Registration error","Check entered data");
        }
      });
    }
  }
}
