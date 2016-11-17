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

  private stream_layers(n, m, o) {
    let self = this;
    if (arguments.length < 3) o = 0;
    function bump(a) {
      var x = 1 / (.1 + Math.random()),
        y = 2 * Math.random() - .5,
        z = 10 / (.1 + Math.random());
      for (var i = 0; i < m; i++) {
        var w = (i / m - y) * z;
        a[i] += x * Math.exp(-w * w);
      }
    }
  return d3.range(n).map(function() {
      var a = [], i;
      for (i = 0; i < m; i++) a[i] = o + o * Math.random();
      for (i = 0; i < 5; i++) bump(a);
      return a.map(self.stream_index);
    });
  }

  /* Another layer generator using gamma distributions. */
  private stream_waves(n, m) {
    let self = this;
    return d3.range(n).map(function(i) {
      return d3.range(m).map(function(j) {
        var x = 20 * j / m - i / 3;
        return 2 * x * Math.exp(-.5 * x);
      }).map(self.stream_index);
    });
  }

  private stream_index(d, i) {
    return {x: i, y: Math.max(0, d)};
  }

  private generateData() {
    return this.stream_layers(3,10+Math.random()*200,.1).map(function(data, i) {
      return {
        key: 'Stream' + i,
        values: data
      };
    });
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

    this.data = this.generateData();
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
