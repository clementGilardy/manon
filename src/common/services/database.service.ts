import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "environments/environment";

const headers = new HttpHeaders().set('Cache-Control', 'max-age=0');

@Injectable()
export class DatabaseService {

	protected url: string;
	protected base: string;


	constructor(protected http: HttpClient) {
		this.base = environment.back_url;
	}

	getAll() {
		return this.http.get(this.base + this.url, {headers: headers}).toPromise();
	}

	getByLimit(limit: number) {
		return this.http.get(this.base + this.url + '/limit/' + limit, {headers: headers}).toPromise();
	}

	get(id: string) {
		return this.http.get(this.base + this.url + '/' + id, {headers: headers}).toPromise();
	}
}
