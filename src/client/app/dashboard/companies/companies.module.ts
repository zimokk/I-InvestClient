import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CompaniesHomeModule} from "./home/companies-home.module";
import {CompanyModule} from "./company/company.module";

@NgModule({
  imports: [CommonModule, CompaniesHomeModule, CompanyModule],
  declarations: [],
  exports: [],
  providers: []
})

export class CompaniesModule { }
