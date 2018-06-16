import { Component, OnInit } from '@angular/core';
import { MailService } from "common/services/mail.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';

const options = {
	progressBar: true
};

@Component({
	           selector   : 'app-contact',
	           templateUrl: 'contact.component.html',
	           styleUrls  : ['contact.component.scss']
           })
export class ContactComponent implements OnInit {
	public form: FormGroup;

	constructor(private mail: MailService, private toast: ToastrService) {
	}

	ngOnInit() {
		this.form = new FormGroup({
			                          nom    : new FormControl('', {validators: Validators.required}),
			                          prenom : new FormControl('', {validators: Validators.required}),
			                          email  : new FormControl('', {
				                          validators: [Validators.required,
				                                       Validators.email]
			                          }),
			                          message: new FormControl('', {validators: Validators.required})
		                          });
	}

	/**
	 * Envoie le mail si les champs sont remplie et si ils sont corrects
	 */
	sendMail():void {
		if (this.form.status === 'VALID') {
			this.mail.sendMail(this.form.value).then((result: any) => {
				this.toast.success('Le mail à bien été envoyé.', null, options)
			}).catch(() => {
				this.toast.error('Une erreur est survenue pendant l\'envoie du mail', null, options)
			});
		} else {
			this.toast.error("Tous les champs sont requis. Et l'adresse mail doit être au bon format.", null, options);
		}
	}
}
