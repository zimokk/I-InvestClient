import { Component } from '@angular/core';
import {NotificationsService} from "angular2-notifications/components";
import {ActionsService} from "../../../servicies/action.service";

@Component({
  moduleId: module.id,
  selector: 'actions-home-cmp',
  templateUrl: 'actions-home.component.html'
})

export class ActionsHomeComponent {
  public actions = [];
  public isLoading = true;

  constructor(private  notificationService: NotificationsService, private actionsService: ActionsService) {
  }

  ngOnInit(){
    
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
