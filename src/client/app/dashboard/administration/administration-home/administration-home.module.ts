import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import {AdministrationHomeComponent} from "./administration-home.component";
import {LoaderModule} from "../../../shared/loader/loader.module";
import {Ng2PaginationModule} from "ng2-pagination/index";

@NgModule({
  imports: [CommonModule, LoaderModule, RouterModule, Ng2PaginationModule, FormsModule],
  declarations: [AdministrationHomeComponent],
  exports: [AdministrationHomeComponent]
})

export class AdministrationHomeModule { }
