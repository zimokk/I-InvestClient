import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';
import {LoaderModule} from "../../../shared/loader/loader.module";
import {ActionComponent} from "./action.component";
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
  imports: [CommonModule, LoaderModule, RouterModule, SharedModule],
  declarations: [ActionComponent],
  exports: [ActionComponent, RouterModule, SharedModule],
  providers: []
})

export class ActionModule { }
