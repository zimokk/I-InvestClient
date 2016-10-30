import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import {CompaniesHomeComponent} from "./companies-home.component";
import {LoaderModule} from "../../../shared/loader/loader.module";

@NgModule({
  imports: [CommonModule, LoaderModule, RouterModule],
  declarations: [CompaniesHomeComponent],
  exports: [CompaniesHomeComponent]
})

export class CompaniesHomeModule { }
