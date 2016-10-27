import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SignupComponent } from './signup.component';

@NgModule({
    imports: [
      CommonModule, RouterModule, BrowserModule, FormsModule
    ],
    declarations: [SignupComponent],
    exports: [SignupComponent]
})

export class SignupModule { }
