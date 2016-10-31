import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import {AdministrationHomeComponent} from "./administration-home.component";
import {LoaderModule} from "../../../shared/loader/loader.module";

@NgModule({
  imports: [CommonModule, LoaderModule, RouterModule],
  declarations: [AdministrationHomeComponent],
  exports: [AdministrationHomeComponent]
})

export class AdministrationHomeModule { }
