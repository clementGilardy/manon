import { Component, OnInit } from '@angular/core';
import { ProjectService } from "common/services/project.service";
import { Project } from "app/admin/project";

@Component({
	           selector   : 'app-projects',
	           templateUrl: 'projects.component.html',
	           styleUrls  : ['projects.component.scss']
           })
export class ProjectsComponent implements OnInit {
	public projects: Array<Project>;

	constructor(private projectService: ProjectService) {
		this.projects = new Array<Project>();
	}

	ngOnInit() {
		this.projectService.getAll().then((result: Array<Project>) => {
			this.projects = result;
		});
	}
}
