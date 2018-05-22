import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DatabaseService } from "common/services/database.service";


@Injectable()
export class TokenService extends DatabaseService {

	constructor(protected http: HttpClient) {
		super(http);
		this.url = '/api/authenticate'
	}

	authenticate(obj: any) {
		return this.http
		           .post(this.base + this.url, obj);
	}

}
