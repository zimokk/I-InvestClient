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
        self.companies = result.data;
      } else if(result.statusCode == 404){
        self.notificationService.error("Error",registrationResult.message);
      } else {
        self.notificationService.error("Error", "An error quering users list");
      }
      self.toggleLoader();
    })
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
