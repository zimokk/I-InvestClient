import { Component,Input } from '@angular/core';
import {AuthService} from "../../servicies/auth.service";
import {MessagesService} from "../../servicies/message.service";

@Component({
    moduleId: module.id,
    selector: 'top-nav',
    templateUrl: 'topnav.html',
})

export class TopNavComponent {
  @Input() currentUser;
  public messages = [];

  constructor(private authService: AuthService, private messageService: MessagesService){
  }

  ngOnInit(){
    let self = this;
    self.messageService.getByReceiverLogin(self.currentUser.login).then(function (result) {
      if(result.statusCode == 0){
        self.messages = result.data;
      }
    });
  }

  logout():void{
    this.authService.logout();
  }

	changeTheme(color: string): void {
		var link: any = $('<link>');
		link
			.appendTo('head')
			.attr({type : 'text/css', rel : 'stylesheet'})
			.attr('href', 'themes/app-'+color+'.css');
	}

	rtl(): void {
		var body: any = $('body');
		body.toggleClass('rtl');
	}

	sidebarToggler(): void  {
		var sidebar: any = $('#sidebar');
		var mainContainer: any = $('.main-container');
		sidebar.toggleClass('sidebar-left-zero');
		mainContainer.toggleClass('main-container-ml-zero');
	}
}
