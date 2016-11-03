import {Component} from '@angular/core';
import {LoaderComponent} from "../../../shared/loader/loader.component";

@Component({
  moduleId: module.id,
  selector: 'my-companies-cmp',
  templateUrl: 'my-companies.component.html',
  directives: [LoaderComponent]
})

export class MyCompaniesComponent {}
