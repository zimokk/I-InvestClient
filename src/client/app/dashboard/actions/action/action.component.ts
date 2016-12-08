import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {NotificationsService} from "angular2-notifications/components";
import {LoaderComponent} from "../../../shared/loader/loader.component";
import {ActionsService} from "../../../servicies/action.service";
@Component({
  moduleId: module.id,
  selector: 'action-cmp',
  templateUrl: 'action.component.html',
  directives: [LoaderComponent]
})

export class ActionComponent {
  public currentAction = {};
  public isLoading = true;

  constructor(
    private  notificationService: NotificationsService,
    private route: ActivatedRoute,
    private router: Router,
    private actionsService: ActionsService) {
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
