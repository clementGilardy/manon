import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class DatabaseService {

	protected url: string;
	protected base: string;


	constructor(protected http: HttpClient) {
		this.base = 'http://localhost:8080';
	}

	getAll() {
		return this.http.get(this.base + this.url).toPromise();
	}

	getByLimit(limit: number) {
		return this.http.get(this.base + this.url + '/limit/' + limit).toPromise();
	}

	get(id: string) {
		return this.http.get(this.base + this.url + '/' + id).toPromise();
	}
}
