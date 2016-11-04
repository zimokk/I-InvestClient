import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {UserService} from "../../../servicies/user.service";
import {NotificationsService} from "angular2-notifications/components";
import {LoaderComponent} from "../../../shared/loader/loader.component";
import { NDV_DIRECTIVES } from 'angular2-click-to-edit/components';

@Component({
  moduleId: module.id,
  selector: 'user-cmp',
  templateUrl: 'user.component.html',
  directives: [LoaderComponent, NDV_DIRECTIVES]
})

export class UserComponent {
  public currentUser = {};
  public isLoading = true;

  constructor(
    private userService: UserService,
    private notificationService: NotificationsService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  saveChanges(event){
    console.dir(event);
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
          self.currentUser = data.data;
          self.toggleLoader();
        } else if(result.statusCode == 404){
          self.notificationService.error("Error",registrationResult.message);
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

  private toggleLoader(): void{
    let self = this;
    if(!this.isLoading){
      self.isLoading = true;
    } else{
      setTimeout(function () {
        self.isLoading = false;
      }, 500)
    }
  }

}
