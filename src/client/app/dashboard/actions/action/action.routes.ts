import { Route, provideRouter, RouterConfig} from '@angular/router';
import {ActionComponent} from "./action.component";

export const ActionRoutes: Route[] = [
  {
    path: 'action/:id',
    component: ActionComponent,
  }
];
