import { Component, Input } from '@angular/core';
import { Project } from "app/admin/project";
import { ProjectService } from "common/services/project.service";

@Component({
	           selector   : 'app-addproject',
	           templateUrl: 'addProject.component.html',
	           styleUrls  : ['addProject.component.scss']
           })
export class AddProjectComponent  {
	@Input() projects: Array<Project>;
	public project: Project;

	constructor(private projectService: ProjectService) {
		this.project = new Project();
	}

	addProject() {
		this.projectService
		    .saveProject(this.project)
		    .subscribe((result) => {
			    this.projects.push(this.project);
			    console.log(result);
		    }, (err) => {
			    console.log(err);
		    });
	}
}