import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MailService } from "common/services/mail.service";

@Component({
	           selector   : 'app-contactmobile',
	           templateUrl: 'contactMobile.component.html',
	           styleUrls  : ['contactMobile.component.scss']
           })
export class ContactMobileComponent implements OnInit {
	public form: FormGroup;
	public mailSend: boolean;
	public mailSendFail: boolean;

	constructor(private mail: MailService) {
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
