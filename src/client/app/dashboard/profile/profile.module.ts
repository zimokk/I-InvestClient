import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { BrowserModule } from '@angular/platform-browser';
import {ConfirmModule, ConfirmOptions, Position} from 'angular2-bootstrap-confirm';
import {Positioning} from "angular2-bootstrap-confirm/position/index";
import {LoaderModule} from "../../shared/loader/loader.module";
import {UserService} from "../../servicies/user.service";
import {SharedModule} from "../../shared/shared.module";
import {AuthService} from "../../servicies/auth.service";
import {WorkplaceService} from "../../servicies/workplace.service";

@NgModule({
  imports: [CommonModule, LoaderModule, RouterModule, BrowserModule, SharedModule, ConfirmModule],
  declarations: [ProfileComponent],
  exports: [ProfileComponent, RouterModule],
  providers: [UserService, ConfirmOptions,{provide: Position, useClass: Positioning}, AuthService, WorkplaceService]
})

export class ProfileModule { }
