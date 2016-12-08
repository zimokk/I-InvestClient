import { Route, provideRouter, RouterConfig} from '@angular/router';
import {AuthService} from "../../servicies/auth.service";
import {ActionsHomeRoutes} from "./home/actions-home.routes";
import {ActionRoutes} from "./action/action.routes";

export const ActionsRoutes: Route[] = [
  {
    path: 'actions',
    children: [
      ...ActionsHomeRoutes,
      ...ActionRoutes
    ],
    canActivate: [AuthService]
  }
];
