import { Component, ViewContainerRef } from '@angular/core';
import { Config } from './shared/index';
import {SimpleNotificationsModule} from "angular2-notifications/components";

@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
  providers: [SimpleNotificationsModule]
})

export class AppComponent {
	private viewContainerRef: ViewContainerRef;
	public constructor(viewContainerRef:ViewContainerRef ) {
		// You need this small hack in order to catch application root view container ref
		this.viewContainerRef = viewContainerRef;
		console.log('Environment config', Config);
	}

  public notificationOptions = {
    position: ["top", "right"],
    timeOut: 5000,
  }

}
