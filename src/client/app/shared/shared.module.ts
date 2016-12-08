import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NDV_DIRECTIVES } from 'angular2-click-to-edit/components';

import { NameListService } from './name-list/index';
import {nvD3} from "ng2-nvd3/build/lib/ng2-nvd3";

@NgModule({
    imports: [
      CommonModule,
      RouterModule,
      FormsModule],
    declarations: [NDV_DIRECTIVES, nvD3],
    exports: [CommonModule, FormsModule, RouterModule, NDV_DIRECTIVES, nvD3]
})

export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [NameListService]
        };
    }
}
