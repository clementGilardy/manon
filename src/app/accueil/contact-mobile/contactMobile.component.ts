import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MailService } from "common/services/mail.service";
import { ToastrService } from 'ngx-toastr';

@Component({
	           selector   : 'app-contactmobile',
	           templateUrl: 'contactMobile.component.html',
	           styleUrls  : ['contactMobile.component.scss']
           })
export class ContactMobileComponent implements OnInit {
	public form: FormGroup;

	constructor(private mail: MailService, private toast: ToastrService) {
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
				this.toast.success('Envoie du mail réussi.',null,{progressBar:true})
			}).catch(() => {
				this.toast.error("Impossible d'envoyer le mail.",null,{progressBar:true})
			});
		} else {
			this.toast.error("Tous les champs sont requis et l'adresse mail doit être au bon format.",null,{progressBar:true})
		}
	}
}
