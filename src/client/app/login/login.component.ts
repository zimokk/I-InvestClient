import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

import { AuthService } from '../servicies/auth.service';

@Component({
	moduleId: module.id,
	selector: 'login-cmp',
	templateUrl: 'login.component.html'
})

export class LoginComponent {
  constructor(private authService: AuthService){

  }

  onSubmit(){
    console.log("login onsubmit");
    let login = this.login;
    let password = this.password;
    this.authService.login(login, password);
    return false;
  }

}
