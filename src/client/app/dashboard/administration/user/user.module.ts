import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserService } from "../../../servicies/user.service";
import { LoaderModule } from "../../../shared/loader/loader.module";
import { BrowserModule } from '@angular/platform-browser';
import {SharedModule} from "../../../shared/shared.module";
import {ConfirmModule, ConfirmOptions, Position} from 'angular2-bootstrap-confirm';
import {Positioning} from "angular2-bootstrap-confirm/position/index";

@NgModule({
  imports: [CommonModule, LoaderModule, RouterModule, BrowserModule, SharedModule, ConfirmModule],
  declarations: [UserComponent],
  exports: [UserComponent, RouterModule],
  providers: [UserService, ConfirmOptions,{provide: Position, useClass: Positioning}]
})

export class UserModule { }
