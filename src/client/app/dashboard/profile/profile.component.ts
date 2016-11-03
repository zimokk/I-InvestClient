import {Component} from '@angular/core';
import {LoaderComponent} from "../../shared/loader/loader.component";

@Component({
  moduleId: module.id,
  selector: 'profile-cmp',
  templateUrl: 'profile.component.html',
  directives: [LoaderComponent]
})

export class ProfileComponent {}
