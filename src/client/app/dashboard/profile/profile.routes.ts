import { Route, provideRouter, RouterConfig} from '@angular/router';
import { ProfileComponent } from './index';

export const ProfileRoutes: Route[] = [
  {
    path: 'profile',
    component: ProfileComponent,
  }
];
