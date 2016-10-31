import { Component } from '@angular/core';
import {NotificationsService} from "angular2-notifications/components";
import {CompaniesService} from "../../../servicies/company.service";

@Component({
  moduleId: module.id,
  selector: 'companies-home-cmp',
  templateUrl: 'companies-home.component.html'
})

export class CompaniesHomeComponent {
  public companies = [];
  public isLoading = true;

  constructor(private  notificationService: NotificationsService, private companiesService: CompaniesService) {
  }

  ngOnInit(){
    this.getCompanies()
  }

  public getCompanies():void{
    let self = this;
    this.companiesService.getAll().then(function (result) {
      if(result.statusCode == 0){
        self.companies = result.result;
      } else {
        self.notificationService.error("Error", "An error quering users list");
      }
      self.toggleLoader();
    })
  }

  private toggleLoader(): void{
    let self = this;
    setTimeout(function () {
      self.isLoading = !self.isLoading;
    }, 500)
  }
}
