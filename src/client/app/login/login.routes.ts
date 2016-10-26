import { Route } from '@angular/router';
import { LoginComponent } from './index';
import {AuthService} from "../servicies/auth.service";

export const LoginRoutes: Route[] = [
  	{
    	path: 'login',
    	component: LoginComponent
  	}
];
