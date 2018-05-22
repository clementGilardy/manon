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

	saveProject(project: Project) {
		const headers = new HttpHeaders().set('x-api-key', this.localStorage.get('token'));
		const u       = '/api/admin/projects';
		return this.http.post(this.base + u, project, {headers: headers});
	}

}
