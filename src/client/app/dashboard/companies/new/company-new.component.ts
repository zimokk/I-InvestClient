import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {NotificationsService} from "angular2-notifications/components";
import {LoaderComponent} from "../../../shared/loader/loader.component";
import {CompaniesService} from "../../../servicies/company.service";
import {UserService} from "../../../servicies/user.service";
import {AuthService} from "../../../servicies/auth.service";

@Component({
  moduleId: module.id,
  selector: 'company-new-cmp',
  templateUrl: 'company-new.component.html',
  directives: [LoaderComponent]
})

export class CompanyNewComponent {
  public currentCompany = {
  };
  public isLoading = false;
  private currentUser;
  public actions = [
    {
      "_id": "58297da557d2c422305fcabb",
      "name": "Apple"
    },
    {
      "_id": "582c2081dba9091d80a1aa32",
      "name": "Nokia"
    },
    {
      "_id": "582c2091dba9091d80a1b01b",
      "name": "JetBrains"
    },
    {
      "_id": "582c209fdba9091d80a1b604",
      "name": "Opel"
    },
    {
      "_id": "582c20acdba9091d80a1bbed",
      "name": "WS"
    },
    {
      "_id": "582c20d9dba9091d80a1c1d6",
      "name": "Logitech"
    },
    {
      "_id": "582c20e7dba9091d80a1c7bf",
      "name": "High definit"
    },
    {
      "_id": "582c20f1dba9091d80a1cda8",
      "name": "Na'vi"
    },
    {
      "_id": "582c2273dba9091d80a1d391",
      "name": "Na'vi"
    },
    {
      "_id": "582c2274dba9091d80a1d7de",
      "name": "Na'vi"
    },
    {
      "_id": "582c2275dba9091d80a1def3",
      "name": "Na'vi"
    }
  ];

  constructor(
    private notificationService: NotificationsService,
    private route: ActivatedRoute,
    private router: Router,
    private companiesService: CompaniesService,
    private userService: UserService,
    private authService: AuthService) {
  }

  ngOnInit(){
    let self = this;
    self.toggleLoader();
    self.userService.getByLogin(this.authService.getCurrentUser()).then(
      result => {
        self.currentUser = result.data;
        self.toggleLoader();
      }
    );
  }

  onSubmit(){
    let self = this;
    self.toggleLoader();
    if(self.currentUser){
      self.currentCompany.userId = self.currentUser._id
    }
    self.companiesService.addCompany(self.currentCompany).then(function (result) {
      if(result.statusCode == 0){
        self.router.navigate(['companies']);
        self.notificationService.success("Success","New company created");
      }
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
