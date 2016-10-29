import { Route, provideRouter, RouterConfig} from '@angular/router';
import { UserComponent } from './index';

export const UserRoutes: Route[] = [
  {
    path: 'user/:id',
    component: UserComponent,
  }
];
