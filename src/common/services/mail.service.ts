import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DatabaseService } from "common/services/database.service";
import { Contact } from "app/accueil/contact/contact";

@Injectable()
export class MailService extends DatabaseService {

	constructor(protected http: HttpClient) {
		super(http);
		this.url = '/api/mail'
	}

	sendMail(obj: Contact) {
		return this.http.post(this.base + this.url, obj).subscribe((res)=>{
			console.log(res);
		},(err)=>{
			console.log(err);
		});
	}
}
