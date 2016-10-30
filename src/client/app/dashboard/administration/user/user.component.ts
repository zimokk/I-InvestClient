import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {UserService} from "../../../servicies/user.service";
import {NotificationsService} from "angular2-notifications/components";
import {LoaderComponent} from "../../../shared/loader/loader";

@Component({
  moduleId: module.id,
  selector: 'user-cmp',
  templateUrl: 'user.component.html',
  directives: [LoaderComponent]
})

export class UserComponent {
  public currentUser = {};
  public isLoading = true;

  constructor(
    private userService: UserService,
    private  notificationService: NotificationsService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(){
    let params = this.route.params;
    let id = params.value.id;
    let self = this;
    if(!id){
      self.userNotFound();
    } else{
      this.userService.get(id).then(function (data) {
        if(data.statusCode == 0){
          console.log(data);
          self.currentUser = data.data;
          self.isLoading = false;
        } else {
          self.userNotFound();
        }
      });
    }
  }

  private userNotFound():void{
    this.notificationService.alert("Error", "User not found");
    this.router.navigate(['/dashboard']);
  }

}
