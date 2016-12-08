import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActionsHomeModule} from "./home/actions-home.module";
import {ActionsService} from "../../servicies/action.service";
import {ActionModule} from "./action/action.module";

@NgModule({
  imports: [CommonModule, ActionsHomeModule, ActionModule],
  declarations: [],
  exports: [],
  providers: [ActionsService]
})

export class ActionsModule { }
