import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import {AdministrationHomeComponent} from "./administration-home.component";
import {LoaderModule} from "../../../shared/loader/loader.module";
import {Ng2PaginationModule} from "ng2-pagination/index";

import {ConfirmModule, ConfirmOptions, Position} from 'angular2-bootstrap-confirm';
import {Positioning} from "angular2-bootstrap-confirm/position/index";

import {PaginationModule} from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
  imports: [CommonModule, LoaderModule, RouterModule, Ng2PaginationModule, FormsModule, PaginationModule, ConfirmModule],
  declarations: [AdministrationHomeComponent],
  exports: [AdministrationHomeComponent],
  providers: [ConfirmOptions, {provide: Position, useClass: Positioning}]
})

export class AdministrationHomeModule { }
