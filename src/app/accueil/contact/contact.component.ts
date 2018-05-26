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
	public mailSend: boolean;
	public mailSendFail: boolean;

	constructor(private mail: MailService) {
		this.mailSend     = false;
		this.mailSendFail = false;
		this.contact      = new Contact();
	}

	sendMail() {
		this.mail.sendMail(this.contact).then((result: any) => {
			this.mailSend = result['send'];
			setTimeout(() => {
				this.mailSend = false;
			}, 10000);
		}).catch(() => {
			this.mailSend     = false;
			this.mailSendFail = true;
			setTimeout(() => {
				this.mailSendFail = false;
			}, 10000);
		});
	}
}
