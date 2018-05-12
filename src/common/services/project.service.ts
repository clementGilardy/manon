import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DatabaseService } from "common/services/database.service";
import { Project } from "app/admin/project";


@Injectable()
export class ProjectService extends DatabaseService {

	constructor(protected http: HttpClient) {
		super(http);
		this.url = '/api/projects'
	}

	saveProject(project: Project) {
		return this.http
		           .post(this.base + this.url, project);
	}

}
