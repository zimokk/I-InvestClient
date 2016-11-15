import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoaderComponent} from "./loader.component";
import {BounceLoaderComponent} from "./bounse-loader/bounce-loader.component";


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoaderComponent, BounceLoaderComponent],
  exports: [LoaderComponent,BounceLoaderComponent],
  providers: []
})

export class LoaderModule { }
