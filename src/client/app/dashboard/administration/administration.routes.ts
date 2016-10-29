import { Route, provideRouter, RouterConfig} from '@angular/router';
import {AuthService} from "../../servicies/auth.service";
import {UserRoutes} from "./user/user.routes";
import {AdministrationHomeRoutes} from "./administration-home/administration-home.routes";

export const AdministrationRoutes: Route[] = [
  {
    path: 'administration',
    children: [
      ...AdministrationHomeRoutes,
      ...UserRoutes
    ],
    data: {roles:['admin']},
    canActivate: [AuthService]
  }
];
