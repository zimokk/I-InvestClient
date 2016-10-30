import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {NotificationsService} from "angular2-notifications/components";
import {LoaderComponent} from "../../../shared/loader/loader";

@Component({
  moduleId: module.id,
  selector: 'company-cmp',
  templateUrl: 'company.component.html',
  directives: [LoaderComponent]
})

export class CompanyComponent {
  public currentUser = {};
  public isLoading = true;

  constructor(
    private  notificationService: NotificationsService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(){
  }
  
}
