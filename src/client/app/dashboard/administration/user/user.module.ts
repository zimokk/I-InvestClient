import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserService } from "../../../servicies/user.service";
import {LoaderModule} from "../../../shared/loader/loader.module";

@NgModule({
  imports: [CommonModule, LoaderModule],
  declarations: [UserComponent],
  exports: [UserComponent],
  providers: [UserService]
})

export class UserModule { }
