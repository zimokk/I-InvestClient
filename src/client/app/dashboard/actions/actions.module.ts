import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActionsHomeModule} from "./home/actions-home.module";
import {ActionsService} from "../../servicies/action.service";

@NgModule({
  imports: [CommonModule, ActionsHomeModule],
  declarations: [],
  exports: [],
  providers: [ActionsService]
})

export class ActionsModule { }
