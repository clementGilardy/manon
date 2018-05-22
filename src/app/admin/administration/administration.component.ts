import { Component } from '@angular/core';
import { Project } from "app/admin/project";
import { ProjectService } from "common/services/project.service";
import { LocalStorageService } from "common/services/localStorage.service";
import { Utils } from "common/class/utils";
import * as moment from 'moment';

@Component({
	           selector   : 'app-administration',
	           templateUrl: 'administration.component.html',
	           styleUrls  : ['administration.component.scss']
           })
export class AdministrationComponent {
	public projects: Array<Project>;
	public displayList: boolean;
	public displayForm: boolean;

	constructor(private projectService: ProjectService, private localStorage: LocalStorageService) {
		this.projects    = new Array<Project>();
		this.displayList = true;
		this.displayForm = false;

		this.projectService.getAll().then((result: any) => {
			result.forEach((projet: Project) => {
				this.projects.push(new Project().init(projet));
			});
		}).catch((error) => {
			console.log(error);
		});

		if (!Utils.isEmpty(this.localStorage.get('token')) && this.isLoggedIn()) {
			this.displayForm = true;
		}
	}

	public isLoggedIn() {
		return moment().isBefore(this.getExpiration());
	}

	getExpiration() {
		const expiration = localStorage.getItem("expire_at");
		return moment(expiration);
	}
}
