import { Route, provideRouter, RouterConfig} from '@angular/router';

import { HomeRoutes } from './home/index';
import { ChartRoutes } from './charts/index';
import { BlankPageRoutes } from './blank-page/index';
import { TableRoutes } from './tables/index';
import { FormRoutes } from './forms/index';
import { GridRoutes } from './grid/index';
import { BSComponentRoutes } from './bs-component/index';
import { BSElementRoutes } from './bs-element/index';

import { AuthService } from '../servicies/auth.service'

import { DashboardComponent } from './index';
import {AdministrationRoutes} from "./administration/administration.routes";
import {CompaniesRoutes} from "./companies/companies.routes";
import {ProfileRoutes} from "./profile/profile.routes";
import {ActionsRoutes} from "./actions/actions.routes";

export const DashboardRoutes: Route[] = [
  	{
    	path: 'dashboard',
    	component: DashboardComponent,
    	children: [
	    	...HomeRoutes,
	    	...ChartRoutes,
	    	...BSComponentRoutes,
        ...TableRoutes,
	    	...BlankPageRoutes,
        ...FormRoutes,
        ...GridRoutes,
        ...BSElementRoutes,
        ...AdministrationRoutes,
        ...CompaniesRoutes,
        ...ProfileRoutes,
        ...ActionsRoutes
    	],
      data: {roles:['user']},
      canActivate: [AuthService] //add required roles
  	},
    { path: '**', redirectTo: 'dashboard/home' }
];
// const appRoutes:RouterConfig = [                 //removed export
//   {                                          // removed square bracket
//     path: '',
//     redirectTo: '/home',
//     pathMatch: 'full'
//   },{
//     path: 'home',
//     component: HomeComponent
//   }
// ];
//
//
// export const appRouterProviders = [
//   provideRouter(routes)
// ];
