import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import {LoaderModule} from "../../../shared/loader/loader.module";
import {ActionsHomeComponent} from "./actions-home.component";
import {PaginationModule} from "ng2-bootstrap/ng2-bootstrap";
import {Ng2PaginationModule} from "ng2-pagination/index";
import {nvD3} from "ng2-nvd3/build/lib/ng2-nvd3";
import {SelectModule} from "ng2-select/ng2-select";
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
  imports: [CommonModule, LoaderModule, Ng2PaginationModule, FormsModule, RouterModule, SelectModule, PaginationModule, SharedModule],
  declarations: [ActionsHomeComponent],
  exports: [ActionsHomeComponent]
})

export class ActionsHomeModule { }
