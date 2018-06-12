import { Component, Input } from '@angular/core';
import { Project } from "app/admin/project";
import { ProjectService } from "common/services/project.service";

@Component({
	           selector   : 'app-addproject',
	           templateUrl: 'addProject.component.html',
	           styleUrls  : ['addProject.component.scss']
           })
export class AddProjectComponent {
	public project: Project;
	public isAdd: boolean;

	constructor(private projectService: ProjectService) {
		this.project = new Project();
	}

	addProject() {
		this.projectService
		    .saveProject(this.project)
		    .subscribe((res: any) => {
			    this.project.id = res.project._id;
			    this.isAdd      = true;
		    }, () => {
			    this.isAdd = false;
		    });
	}
}