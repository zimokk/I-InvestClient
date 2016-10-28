import { Component } from '@angular/core';
import { Router } from '@angular/router'

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
  constructor(private userService: UserService,
              private authService: AuthService,
              private notificationService: NotificationsService,
              private router: Router
    ){}

  onSubmit(){
    let self = this;
    if(this.password == this.repeatedPassword){
      this.userService.register(
        {
          login:this.login,
          password: this.password,
          email: this.email,
          age: this.age,
          sex: this.sex
        }
      ).then(function (registrationResult) {
        if(registrationResult.statusCode == 0){
          self.notificationService.success("Successful registration","Enter, using your login & password");
          self.router.navigate(['/login']);
        } else{
          self.notificationService.error("Registration error","Check entered data");
        }
      });
    }
  }
}
