import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CompaniesHomeModule} from "./home/companies-home.module";
import {CompanyModule} from "./company/company.module";
import {CompaniesService} from "../../servicies/company.service";
import {CompanyNewModule} from "./new/company-new.module";
import {MyCompaniesModule} from "./my/my-companies.module";

@NgModule({
  imports: [CommonModule, CompaniesHomeModule, CompanyModule, CompanyNewModule, MyCompaniesModule],
  declarations: [],
  exports: [],
  providers: [CompaniesService]
})

export class CompaniesModule { }
