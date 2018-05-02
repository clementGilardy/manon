import { Component } from '@angular/core';
import { Contact } from "app/accueil/contact/contact";

@Component({
	           selector   : 'app-contactmobile',
	           templateUrl: 'contactMobile.component.html',
	           styleUrls  : ['contactMobile.component.scss']
           })
export class ContactMobileComponent {
	public contact: Contact;

	constructor() {
		this.contact = new Contact();
	}
}
