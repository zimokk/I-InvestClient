import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { ProfileComponent } from './profile.component';
import { BrowserModule } from '@angular/platform-browser';
import {ConfirmModule, ConfirmOptions, Position} from 'angular2-bootstrap-confirm';
import {Positioning} from "angular2-bootstrap-confirm/position/index";
import {LoaderModule} from "../../shared/loader/loader.module";
import {UserService} from "../../servicies/user.service";
import {SharedModule} from "../../shared/shared.module";
import {AuthService} from "../../servicies/auth.service";
import {WorkplaceService} from "../../servicies/workplace.service";
import {MessagesService} from "../../servicies/message.service";
import {PaginationModule} from "ng2-bootstrap/ng2-bootstrap";
import {Ng2PaginationModule} from "ng2-pagination/index";
import {SelectModule} from "ng2-select/ng2-select";

@NgModule({
  imports: [CommonModule, SelectModule, LoaderModule, RouterModule, BrowserModule, SharedModule, ConfirmModule,  Ng2PaginationModule, FormsModule, PaginationModule],
  declarations: [ProfileComponent],
  exports: [ProfileComponent, RouterModule],
  providers: [UserService, ConfirmOptions, AuthService, WorkplaceService, MessagesService]
})

export class ProfileModule { }
