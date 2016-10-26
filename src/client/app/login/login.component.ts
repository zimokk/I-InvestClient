import { Component } from '@angular/core';

import { AuthService } from '../servicies/auth.service';

@Component({
	moduleId: module.id,
	selector: 'login-cmp',
	templateUrl: 'login.component.html'
})

export class LoginComponent {
  constructor(private authService: AuthService){

  }

  login(){
    
  }
}
