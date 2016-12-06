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
  public isTopActionsDataLoading = false;
  public isBottomActionsDataLoading = false;

  public options;
  public data;
  public bottomActions = [];
  public topActions = [];
  public topChangingData = [];

  constructor(private  notificationService: NotificationsService, private actionsService: ActionsService) {
  }

  ngOnInit(){
    this.options = {
      chart: {
        type: 'lineWithFocusChart',
        height: 450,
        margin : {
          top: 20,
          right: 20,
          bottom: 60,
          left: 40
        },
        duration: 50,
        xAxis: {
          axisLabel: 'X Axis',
          tickFormat: function(d){
            return d3.format(',f')(d);
          }
        },
        x2Axis: {
          tickFormat: function(d){
            return d3.format(',f')(d);
          }
        },
        yAxis: {
          axisLabel: 'Y Axis',
          tickFormat: function(d){
            return d3.format(',.2f')(d);
          },
          rotateYLabel: false
        },
        y2Axis: {
          tickFormat: function(d){
            return d3.format(',.2f')(d);
          }
        }

      }
    };
    this.allChangingOptions = {
      chart: {
        type: 'cumulativeLineChart',
        height: 450,
        margin : {
          top: 20,
          right: 20,
          bottom: 60,
          left: 65
        },
        x: function(d){ return d[0]; },
        y: function(d){ return d[1]/100; },
        average: function(d) { return d.mean/100; },

        color: d3.scale.category10().range(),
        duration: 300,
        useInteractiveGuideline: true,
        clipVoronoi: false,

        xAxis: {
          axisLabel: 'Date',
          tickFormat: function(d) {
            return d3.time.format('%m/%d/%y')(new Date(d))
          },
          showMaxMin: false,
          staggerLabels: true
        },

        yAxis: {
          axisLabel: 'Y Axis',
          tickFormat: function(d){
            return d3.format(',.1%')(d);
          },
          axisLabelDistance: 20
        }
      }
    };
    this.getActions();
    this.getTopActions();
    this.getBottomActions();
    this.getTopChangingArray();
  }

  public selectAction(action):void{
    if(this.chosenActions.indexOf(action) == -1){
      this.chosenActions.push(action);
      this.setCurrentlyChosen(action);
    }
  }

  public setCurrentlyChosen(action):void{
    if(action){
      let self = this;
      self.isCurrentlyChoselLoading = true;
      this.actionsService.get(action._id).then(function (result) {

        if(result.statusCode == 0){
          self.currentlyChosenAction = result.data;
          let valuesArray = [];
          let i = 0;

          result.data.prices.forEach(function (price) {
            valuesArray.push({
              series: 0,
              y: price.close,
              x: i++
            })
          });

          self.currentlyChosenActionPriceArray = [{
            key: result.data.name,
            values : valuesArray
          }];

          setTimeout(function () {
            self.isCurrentlyChoselLoading = false;
          }, 1000);

        }
      });
      this.currentlyChosenAction = action;
    } else{
      this.currentlyChosenAction = action;
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
      self.toggleLoader(self.isLoading);
    })
  }

  private getTopActions(): void {
    let self = this;
    self.isTopActionsDataLoading = true;
    self.actionsService.getTop().then(function (result) {
      if(result.statusCode == 0){
        self.topActions = result.data;
      } else{
        self.notificationService.error("Error", "An error querying top actions list");
      }
      setTimeout(function () {
        self.isTopActionsDataLoading = false;
      }, 1000);
    })
  }

  private getBottomActions(): void {
    let self = this;
    self.isBottomActionsDataLoading = true;
    self.actionsService.getBottom().then(function (result) {
      if(result.statusCode == 0){
        self.bottomActions = result.data;
      } else{
        self.notificationService.error("Error", "An error querying bottom actions list");
      }
      setTimeout(function () {
        self.isBottomActionsDataLoading = false;
      }, 1000);
    })
  }

  private getTopChangingArray(): void {
    let self = this;
    self.isTopChangingArrayLoading = true;
    self.actionsService.getTopChangingArray().then(function (result) {
      if(result.statusCode == 0){
        self.topChangingData = result.data;
      } else{
        self.notificationService.error("Error", "An error querying top canging actions data");
      }
      setTimeout(function () {
        self.isTopChangingArrayLoading = false;
      }, 1000);
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
