import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {NotificationsService} from "angular2-notifications/components";
import {LoaderComponent} from "../../../shared/loader/loader.component";
import {CompaniesService} from "../../../servicies/company.service";
import {nvD3} from "ng2-nvd3/build/lib/ng2-nvd3";
import {nv} from 'nv';

@Component({
  moduleId: module.id,
  selector: 'company-cmp',
  templateUrl: 'company.component.html',
  directives: [LoaderComponent, nvD3, nv]
})

export class CompanyComponent {
  public currentCompany = {};
  public isLoading = true;

  public options = {
    chart: {
      type: 'pieChart',
      height: 500,
      x: function(d){return d.key;},
      y: function(d){return d.y;},
      showLabels: true,
      duration: 500,
      labelThreshold: 0.01,
      labelSunbeamLayout: true,
      legend: {
        margin: {
          top: 5,
          right: 35,
          bottom: 5,
          left: 0
        }
      }
    }
  };
  public data = [
    {
      key: "Opel",
      y: 5
    },
    {
      key: "Logitech",
      y: 15
    },
    {
      key: "WS",
      y: 25
    },
    {
      key: "Nokia",
      y: 15
    },
    {
      key: "Apple",
      y: 10
    },
    {
      key: "Jet Brains",
      y: 28
    },
    {
      key: "High definit",
      y: 1
    }
  ];
  public actions = [
    {
      "_id": "58297da557d2c422305fcabb",
      "name": "Apple",
      "change": 0.25
    },
    {
      "_id": "582c2081dba9091d80a1aa32",
      "name": "Nokia",
      "change": 4
    },
    {
      "_id": "582c2091dba9091d80a1b01b",
      "name": "JetBrains",
      "change": 12
    },
    {
      "_id": "582c209fdba9091d80a1b604",
      "name": "Opel",
      "change": -5
    },
    {
      "_id": "582c20acdba9091d80a1bbed",
      "name": "WS",
      "change": 11
    },
    {
      "_id": "582c20d9dba9091d80a1c1d6",
      "name": "Logitech",
      "change": -25
    },
    {
      "_id": "582c20e7dba9091d80a1c7bf",
      "name": "High definit",
      "change": 3
    }];

  constructor(
    private  notificationService: NotificationsService,
    private route: ActivatedRoute,
    private router: Router,
    private companiesService: CompaniesService) {
  }

  ngOnInit(){
    let params = this.route.params;
    let id = params.value.id;
    let self = this;
    if(!id){
      self.companyNotFound();
    } else{
      this.companiesService.get(id).then(function (result) {
        if(result.statusCode == 0){
          self.currentCompany = result.data;
          self.toggleLoader();
        } else if(result.statusCode == 404){
          self.notificationService.error("Error",result.message);
        } else {
          self.companyNotFound();
        }
      });
    }
  }

  private companyNotFound():void{
    this.notificationService.alert("Error", "Company not found");
    this.router.navigate(['/dashboard/companies']);
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
