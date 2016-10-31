import { Route, provideRouter, RouterConfig} from '@angular/router';
import {CompanyNewComponent} from "./company-new.component";

export const CompanyNewRoutes: Route[] = [
  {
    path: 'new',
    component: CompanyNewComponent,
  }
];
