import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';
import {LoaderModule} from "../../../shared/loader/loader.module";
import {CompanyNewComponent} from "./company-new.component";
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, LoaderModule, RouterModule, FormsModule],
  declarations: [CompanyNewComponent],
  exports: [CompanyNewComponent, RouterModule],
  providers: []
})

export class CompanyNewModule { }
