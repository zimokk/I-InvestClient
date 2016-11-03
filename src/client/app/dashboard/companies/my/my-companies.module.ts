import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {MyCompaniesComponent} from "./my-companies.component";
import {CompaniesService} from "../../../servicies/company.service";
import {LoaderModule} from "../../../shared/loader/loader.module";
import {SharedModule} from "../../../shared/shared.module";
import {UserService} from "../../../servicies/user.service";

@NgModule({
  imports: [CommonModule, LoaderModule, RouterModule, BrowserModule, SharedModule],
  declarations: [MyCompaniesComponent],
  exports: [MyCompaniesComponent, RouterModule],
  providers: [UserService, CompaniesService]
})

export class MyCompaniesModule { }
