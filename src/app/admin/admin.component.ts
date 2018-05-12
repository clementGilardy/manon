import { Component } from '@angular/core';
import { Project } from "app/admin/project";
import { ProjectService } from "common/services/project.service";

@Component({
	           selector   : 'app-admin',
	           templateUrl: 'admin.component.html',
	           styleUrls  : ['admin.component.scss']
           })
export class AdminComponent {
	public project: Project;

	constructor(private projectService: ProjectService) {
		this.project = new Project();
	}

	addProject() {
		this.projectService
		    .saveProject(this.project)
		    .subscribe((result) => {
			    console.log(result);
		    });
	}
}