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
