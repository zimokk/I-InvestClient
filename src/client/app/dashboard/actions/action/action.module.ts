import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';
import {LoaderModule} from "../../../shared/loader/loader.module";
import {ActionComponent} from "./action.component";

@NgModule({
  imports: [CommonModule, LoaderModule, RouterModule],
  declarations: [ActionComponent],
  exports: [ActionComponent, RouterModule],
  providers: []
})

export class ActionModule { }
