import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserService } from "../../../servicies/user.service";
import { LoaderModule } from "../../../shared/loader/loader.module";
import { BrowserModule } from '@angular/platform-browser';
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
  imports: [CommonModule, LoaderModule, RouterModule, BrowserModule, SharedModule],
  declarations: [UserComponent],
  exports: [UserComponent, RouterModule],
  providers: [UserService]
})

export class UserModule { }
