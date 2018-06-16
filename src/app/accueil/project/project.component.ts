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
	}

	ngOnInit() {
		this.projectService.getByLimit(3).then((result: Array<Project>) => {
			this.projects = result;
		}).catch((err) => {
			console.log(err);
		});
	}
}
