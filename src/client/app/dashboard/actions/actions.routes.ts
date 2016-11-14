import { Route, provideRouter, RouterConfig} from '@angular/router';
import {AuthService} from "../../servicies/auth.service";
import {ActionsHomeRoutes} from "./home/actions-home.routes";

export const ActionsRoutes: Route[] = [
  {
    path: 'actions',
    children: [
      ...ActionsHomeRoutes
    ],
    canActivate: [AuthService]
  }
];
