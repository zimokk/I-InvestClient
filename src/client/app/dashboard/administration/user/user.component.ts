import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {UserService} from "../../../servicies/user.service";
import {NotificationsService} from "angular2-notifications/components";

@Component({
  moduleId: module.id,
  selector: 'user-cmp',
  templateUrl: 'user.component.html'
})

export class UserComponent {
  public currentUser = {};
  constructor(
    private userService: UserService,
    private  notificationService: NotificationsService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(){
    let params = this.route.params;
    let id = params.value.id;
    if(!id){
      this.notificationService.alert("Error", "User not found");
      this.router.navigate(['/dashboard']);
    }
  }

}
