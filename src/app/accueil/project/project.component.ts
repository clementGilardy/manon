import { Component, OnInit } from '@angular/core';
import { ProjectService } from "common/services/project.service";
import { Project } from "app/admin/project";

@Component({
	           selector   : 'app-project',
	           templateUrl: 'project.component.html',
	           styleUrls  : ['project.component.scss']
           })
export class ProjectComponent implements OnInit {
	public projects: Array<Project>;

	constructor(private projectService: ProjectService) {
		this.projects = new Array<Project>();
	}

	ngOnInit() {
		this.projectService.getAll().then((result: Array<Project>) => {
			console.log(result);
			this.projects = result;
		});
	}
}
