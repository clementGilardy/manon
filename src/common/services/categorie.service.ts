import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DatabaseService } from "common/services/database.service";
import { Project } from "app/admin/project";
import { LocalStorageService } from "common/services/localStorage.service";
import { Categorie } from "app/admin/categories/categorie";


@Injectable()
export class CategorieService extends DatabaseService {

	private localStorage: any;

	constructor(protected http: HttpClient) {
		super(http);
		this.url          = '/api/categories';
		this.localStorage = new LocalStorageService();
	}

	saveCategorie(categorie: Categorie) {
		const headers = new HttpHeaders().set('x-api-key', this.localStorage.get('token'));
		const u       = '/api/admin/categories';
		return this.http.post(this.base + u, categorie, {headers: headers});
	}
}
