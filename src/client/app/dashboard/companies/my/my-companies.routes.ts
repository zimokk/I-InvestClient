import { Route, provideRouter, RouterConfig} from '@angular/router';
import { ProfileComponent } from './index';
import {MyCompaniesComponent} from "./my-companies.component";

export const MyCompaniesRoutes: Route[] = [
  {
    path: 'my',
    component: MyCompaniesComponent,
  }
];
