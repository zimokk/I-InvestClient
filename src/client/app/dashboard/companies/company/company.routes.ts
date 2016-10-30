import { Route, provideRouter, RouterConfig} from '@angular/router';
import {CompanyComponent} from "./company.component";

export const CompanyRoutes: Route[] = [
  {
    path: 'company/:id',
    component: CompanyComponent,
  }
];
