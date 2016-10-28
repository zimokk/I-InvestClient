import { Route } from '@angular/router';
import { AdministrationComponent } from './index';
import {AuthService} from "../../servicies/auth.service";

export const AdministrationRoutes: Route[] = [
  {
    path: 'administration',
    component: AdministrationComponent,
    data: {roles:['admin']},
    canActivate: [AuthService]
  }
];
