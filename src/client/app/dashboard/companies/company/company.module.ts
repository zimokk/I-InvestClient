import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';
import {LoaderModule} from "../../../shared/loader/loader.module";
import {CompanyComponent} from "./company.component";
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
  imports: [CommonModule, LoaderModule, RouterModule, SharedModule],
  declarations: [CompanyComponent],
  exports: [CompanyComponent, RouterModule, SharedModule],
  providers: []
})

export class CompanyModule { }
