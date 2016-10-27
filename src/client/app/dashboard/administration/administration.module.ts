import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationComponent } from './administration.component';
import {UserService} from "../../servicies/user.service";

@NgModule({
  imports: [CommonModule],
  declarations: [AdministrationComponent],
  exports: [AdministrationComponent],
  providers: [UserService]
})

export class AdministrationModule { }
