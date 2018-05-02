import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

	public uri: string;

	constructor() {
		this.uri = '/api/mail'
	}

}