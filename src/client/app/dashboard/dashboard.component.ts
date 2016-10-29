import { Component } from '@angular/core';
import {AuthService} from "../servicies/auth.service";

@Component({
	moduleId: module.id,
	selector: 'dashboard-cmp',
	templateUrl: 'dashboard.component.html'
})

export class DashboardComponent {
  constructor(private authService: AuthService){
  }

  ngOnInit(){
    this.currentUser = this.authService.getCurrentUser();
  }

}
