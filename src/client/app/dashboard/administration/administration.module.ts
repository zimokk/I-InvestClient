import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserService} from "../../servicies/user.service";
import {UserModule} from "./user/user.module";
import {AdministrationHomeModule} from "./administration-home/administration-home.module";

@NgModule({
  imports: [CommonModule, UserModule, AdministrationHomeModule],
  declarations: [],
  exports: [],
  providers: [UserService]
})

export class AdministrationModule { }
