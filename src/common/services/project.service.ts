import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DatabaseService } from "common/services/database.service";
import { Project } from "app/admin/project";
import { LocalStorageService } from "common/services/localStorage.service";


@Injectable()
export class ProjectService extends DatabaseService {

	private localStorage: any;

	constructor(protected http: HttpClient) {
		super(http);
		this.url          = '/api/projects';
		this.localStorage = new LocalStorageService();
	}

	saveProject(project: Object) {
		const headers = new HttpHeaders().set('x-api-key', this.localStorage.get('token'));
		const u       = '/api/admin/projects';
		return this.http.post(this.base + u, project, {headers: headers});
	}

	updateProject(project:Object){
		const headers = new HttpHeaders().set('x-api-key', this.localStorage.get('token'));
		const u       = '/api/admin/projects';
		return this.http.put(this.base + u, project, {headers: headers});
	}

	updateOrderProject(projects:Array<Object>) {
		const headers = new HttpHeaders().set('x-api-key', this.localStorage.get('token'));
		const u       = '/api/admin/projects/order';
		return this.http.put(this.base + u, projects, {headers: headers});
	}

	delete(id: string) {
		const headers = new HttpHeaders().set('x-api-key', this.localStorage.get('token'));
		const u       = '/api/admin/projects';
		return this.http.delete(this.base + u + '/' + id, {headers: headers}).toPromise();
	}

}
