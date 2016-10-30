import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import {AdministrationHomeComponent} from "./administration-home.component";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [AdministrationHomeComponent],
  exports: [AdministrationHomeComponent]
})

export class AdministrationHomeModule { }
