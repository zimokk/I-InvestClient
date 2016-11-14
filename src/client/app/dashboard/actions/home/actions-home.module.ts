import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import {LoaderModule} from "../../../shared/loader/loader.module";
import {ActionsHomeComponent} from "./actions-home.component";

@NgModule({
  imports: [CommonModule, LoaderModule, RouterModule],
  declarations: [ActionsHomeComponent],
  exports: [ActionsHomeComponent]
})

export class ActionsHomeModule { }
