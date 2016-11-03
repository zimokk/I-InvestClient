import { Route, provideRouter, RouterConfig} from '@angular/router';
import {AuthService} from "../../servicies/auth.service";
import {CompaniesHomeRoutes} from "./home/companies-home.routes";
import {CompanyRoutes} from "./company/company.routes";
import {CompanyNewRoutes} from "./new/company-new.routes";
import {MyCompaniesRoutes} from "./my/my-companies.routes";

export const CompaniesRoutes: Route[] = [
  {
    path: 'companies',
    children: [
      ...CompaniesHomeRoutes,
      ...CompanyRoutes,
      ...CompanyNewRoutes,
      ...MyCompaniesRoutes
    ],
    canActivate: [AuthService]
  }
];
