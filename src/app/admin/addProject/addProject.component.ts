import { Component } from '@angular/core';
import { Project } from "app/admin/project";
import { ProjectService } from "common/services/project.service";

@Component({
	           selector   : 'app-addproject',
	           templateUrl: 'addProject.component.html',
	           styleUrls  : ['addProject.component.scss']
           })
export class AddProjectComponent {
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