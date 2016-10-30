import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';
import {LoaderModule} from "../../../shared/loader/loader.module";
import {CompanyComponent} from "./company.component";

@NgModule({
  imports: [CommonModule, LoaderModule, RouterModule],
  declarations: [CompanyComponent],
  exports: [CompanyComponent, RouterModule],
  providers: []
})

export class CompanyModule { }
