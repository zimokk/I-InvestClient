import { Component } from '@angular/core';
import {NotificationsService} from "angular2-notifications/components";
import {ActionsService} from "../../../servicies/action.service";
import {nvD3} from "ng2-nvd3/build/lib/ng2-nvd3";
import {nv} from 'nv';

@Component({
  moduleId: module.id,
  selector: 'actions-home-cmp',
  templateUrl: 'actions-home.component.html',
  directives: [nvD3, nv]
})

export class ActionsHomeComponent {
  public actions = [];
  public currentlyChosenAction;
  public chosenActions = [];
  public isLoading = true;
  public isActionsDataRefreshing = false;

  public options;
  public data;

  constructor(private  notificationService: NotificationsService, private actionsService: ActionsService) {
  }

  ngOnInit(){
    this.options = {
      chart: {
        type: 'discreteBarChart',
        height: 450,
        margin : {
          top: 20,
          right: 20,
          bottom: 50,
          left: 55
        },
        x: function(d){return d.label;},
        y: function(d){return d.value;},
        showValues: true,
        valueFormat: function(d){
          return d3.format(',.4f')(d);
        },
        duration: 500,
        xAxis: {
          axisLabel: 'X Axis'
        },
        yAxis: {
          axisLabel: 'Y Axis',
          axisLabelDistance: -10
        }
      }
    }
    this.data = [
      {
        key: "Cumulative Return",
        values: [
          {
            "label" : "A" ,
            "value" : -29.765957771107
          } ,
          {
            "label" : "B" ,
            "value" : 0
          } ,
          {
            "label" : "C" ,
            "value" : 32.807804682612
          } ,
          {
            "label" : "D" ,
            "value" : 196.45946739256
          } ,
          {
            "label" : "E" ,
            "value" : 0.19434030906893
          } ,
          {
            "label" : "F" ,
            "value" : -98.079782601442
          } ,
          {
            "label" : "G" ,
            "value" : -13.925743130903
          } ,
          {
            "label" : "H" ,
            "value" : -5.1387322875705
          }
        ]
      }
    ];
    this.getActions();
  }

  public selectAction(action):void{
    if(this.chosenActions.indexOf(action) == -1){
      this.chosenActions.push(action);
      this.setCurrentlyChosen(action);
    }
  }

  public setCurrentlyChosen(action):void{
    this.currentlyChosenAction = action;
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
