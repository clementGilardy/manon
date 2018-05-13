import { Component } from '@angular/core';
import { Project } from "app/admin/project";
import { ProjectService } from "common/services/project.service";

@Component({
	           selector   : 'app-administration',
	           templateUrl: 'administration.component.html',
	           styleUrls  : ['administration.component.scss']
           })
export class AdministrationComponent {
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