import { Component, OnInit } from '@angular/core';
import { MailService } from "common/services/mail.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
	           selector   : 'app-contact',
	           templateUrl: 'contact.component.html',
	           styleUrls  : ['contact.component.scss']
           })
export class ContactComponent implements OnInit {
	public form: FormGroup;
	public mailSend: boolean;
	public mailSendFail: boolean;

	constructor(private mail: MailService) {
		this.mailSend     = false;
		this.mailSendFail = false;
	}

	ngOnInit() {
		this.form = new FormGroup({
			                          nom    : new FormControl('', {validators: Validators.required}),
			                          prenom : new FormControl('', {validators: Validators.required}),
			                          email  : new FormControl('', {validators: Validators.required}),
			                          message: new FormControl('', {validators: Validators.required})
		                          });
	}

	sendMail() {
		if (this.form.status === 'VALID') {
			this.mail.sendMail(this.form.value).then((result: any) => {
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
}
