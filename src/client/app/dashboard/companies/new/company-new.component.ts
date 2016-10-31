import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {NotificationsService} from "angular2-notifications/components";
import {LoaderComponent} from "../../../shared/loader/loader";
import {CompaniesService} from "../../../servicies/company.service";

@Component({
  moduleId: module.id,
  selector: 'company-new-cmp',
  templateUrl: 'company-new.component.html',
  directives: [LoaderComponent]
})

export class CompanyNewComponent {
  public currentCompany = {};
  public isLoading = false;

  constructor(
    private  notificationService: NotificationsService,
    private route: ActivatedRoute,
    private router: Router,
    private companiesService: CompaniesService) {
  }

  ngOnInit(){

  }

  private toggleLoader(): void{
    let self = this;
    setTimeout(function () {
      self.isLoading = !self.isLoading;
    }, 500)
  }

}
