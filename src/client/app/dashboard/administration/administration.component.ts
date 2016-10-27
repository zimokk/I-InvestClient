import { Component } from '@angular/core';
import {UserService} from "../../servicies/user.service";

@Component({
  moduleId: module.id,
  selector: 'administration-cmp',
  templateUrl: 'administration.component.html'
})

export class AdministrationComponent {
  public users = [];

  constructor(private userService: UserService) {
  }

  ngOnInit(){
    this.getUsers();
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
