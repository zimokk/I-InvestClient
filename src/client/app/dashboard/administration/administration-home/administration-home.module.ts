import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import {AdministrationHomeComponent} from "./administration-home.component";

@NgModule({
  imports: [CommonModule],
  declarations: [AdministrationHomeComponent],
  exports: [AdministrationHomeComponent]
})

export class AdministrationHomeModule { }
