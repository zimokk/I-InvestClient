import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

import { UserService } from '../servicies/user.service';
import { AuthService } from '../servicies/auth.service';

@Component({
	moduleId: module.id,
	selector: 'signup-cmp',
	templateUrl: 'signup.component.html',
  providers: [UserService, AuthService]
})

export class SignupComponent {
  constructor(private userService: UserService, private authService: AuthService){
  }

  onSubmit(f: NgForm){
    console.dir(this.login);
  }

  register(event): void{
    console.dir(this);
    debugger;
    if(password == repeatedPassword){
      this.userService.register(this.login, this.password);
    }
  }
}
