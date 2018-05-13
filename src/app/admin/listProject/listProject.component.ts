import { Component } from '@angular/core';
import { Project } from "app/admin/project";
import { ProjectService } from "common/services/project.service";

@Component({
	           selector   : 'app-listproject',
	           templateUrl: 'listProject.component.html',
	           styleUrls  : ['listProject.component.scss']
           })
export class ListProjectComponent {
	public projects: Array<Project>;

	constructor(private projectService: ProjectService) {
		this.projects = new Array<Project>();
		this.projectService.getAll().then((result:any) => {
			console.log(result);
			// result.forEach((projet) => {
			// 	this.projects.push(new Project().init(projet));
			// });
		}).catch((error)=>{
			console.log(error);
		});
	}
}