import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

import { UserService } from '../servicies/user.service'

@Component({
	moduleId: module.id,
	selector: 'signup-cmp',
	templateUrl: 'signup.component.html',
  providers: [UserService]
})

export class SignupComponent {
  constructor(private userService: UserService){
  }

  onSubmit(f: NgForm){
    console.dir(this.login);
  }

  register(event): void{
    console.dir(this);
    debugger;
    if(password == repeatedPassword){
      this.userService.register(login, password);
    }
  }
}
