import { Component } from '@angular/core';
import { Contact } from "app/accueil/contact/contact";
import { MailService } from "common/services/mail.service";

@Component({
	           selector   : 'app-contact',
	           templateUrl: 'contact.component.html',
	           styleUrls  : ['contact.component.scss']
           })
export class ContactComponent {
	public contact: Contact;

	constructor(private mail:MailService) {
		this.contact = new Contact();
	}

	sendMail(){
		this.mail.sendMail(this.contact);
	}
}
