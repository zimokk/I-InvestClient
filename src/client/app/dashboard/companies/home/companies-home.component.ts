import { Component } from '@angular/core';
import {NotificationsService} from "angular2-notifications/components";

@Component({
  moduleId: module.id,
  selector: 'companies-home-cmp',
  templateUrl: 'companies-home.component.html'
})

export class CompaniesHomeComponent {
  public users = [];

  constructor(private  notificationService: NotificationsService) {
    console.log("yeap");
  }

  ngOnInit(){
  }
}
