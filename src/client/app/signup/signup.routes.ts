import { Route } from '@angular/router';
import { SignupComponent } from './index';

import { AuthService } from '../servicies/auth.service'

export const SignupRoutes: Route[] = [
  	{
    	path: 'signup',
    	component: SignupComponent
  	}
];
