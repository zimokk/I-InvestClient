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
  public chosenActions = [];
  public isLoading = true;
  public isActionsDataRefreshing = false;

  constructor(private  notificationService: NotificationsService, private actionsService: ActionsService) {
  }

  ngOnInit(){
    this.getActions();
  }

  public selectAction(action):void{
    if(this.chosenActions.indexOf(action) == -1){
      this.chosenActions.push(action);
    }
  }

  public deselectAction(action):void{
    this.chosenActions.splice(this.chosenActions.indexOf(action), 1);
  }

  public findActionByName(nameContains):void{
    let self = this;
    self.isActionsDataRefreshing = true;
    this.actionsService.findByName(nameContains).then(function (result) {
      if(result.statusCode == 0){
        self.actions = result.data;
        setTimeout(function () {
          self.isActionsDataRefreshing = false;
        }, 1000);
      } else{
        self.notificationService.error("Error", "An error querying actions list");
      }
    })
  }

  private getActions(): void {
    let self = this;
    self.actionsService.getAll().then(function (result) {
      if(result.statusCode == 0){
        self.actions = result.data;
      } else{
        self.notificationService.error("Error", "An error querying actions list");
      }
      self.toggleLoader();
    })
  }

  private toggleLoader(): void {
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
