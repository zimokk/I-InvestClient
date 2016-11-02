import { Component } from '@angular/core';

import { AuthService } from '../servicies/auth.service';
import {NotificationsService} from "angular2-notifications/components";

@Component({
	moduleId: module.id,
	selector: 'login-cmp',
	templateUrl: 'login.component.html'
})

export class LoginComponent {
  constructor(private authService: AuthService, private  notificationService: NotificationsService){

  }

  onSubmit(){
    let login = this.login;
    let password = this.password;
    let self = this;
    this.authService.login(login, password).then(function (result) {
      if(result){
        if(result.statusCode == 500){
          self.notificationService.error("Error", 'Wrong login/password');
        } else if (result.statusCode == 403){
          self.notificationService.error("Error", result.message);
        } else {
          self.notificationService.success("Success", 'You enter as ' + login);
        }
      } else{
        self.notificationService.error("Error", 'Wrong login/password.');
      }
    });
  }

}
