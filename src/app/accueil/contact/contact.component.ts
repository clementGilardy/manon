import { Component } from '@angular/core';
import { Contact } from "app/accueil/contact/contact";

@Component({
	           selector   : 'app-contact',
	           templateUrl: 'contact.component.html',
	           styleUrls  : ['contact.component.scss']
           })
export class ContactComponent {
	public contact: Contact;

	constructor() {
		this.contact = new Contact();
	}

	sendMail(){
		console.log(this.contact);
	}
}
