import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {NotificationsService} from "angular2-notifications/components";
import {LoaderComponent} from "../../../shared/loader/loader";
import {CompaniesService} from "../../../servicies/company.service";

@Component({
  moduleId: module.id,
  selector: 'company-cmp',
  templateUrl: 'company.component.html',
  directives: [LoaderComponent]
})

export class CompanyComponent {
  public currentCompany = {};
  public isLoading = true;

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
