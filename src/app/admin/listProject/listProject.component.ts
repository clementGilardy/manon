import { Component, OnInit } from '@angular/core';
import { Project } from "app/admin/project";
import { ProjectService } from "common/services/project.service";

@Component({
	           selector   : 'app-listproject',
	           templateUrl: 'listProject.component.html',
	           styleUrls  : ['listProject.component.scss']
           })
export class ListProjectComponent implements OnInit {
	public projects: Array<Project>;

	constructor(private projectService: ProjectService) {
		this.projects = new Array<Project>();
	}

	ngOnInit() {
		this.projectService.getAll().then((result: any) => {
			result.forEach((projet: Project) => {
				this.projects.push(new Project().init(projet));
			});
		}).catch((error) => {
			console.log(error);
		});

	}

	deleteProjet(project: Project) {
		this.projectService.delete(project.id).then(() => {
			console.log('is delete');
			// _.remove(this.projects, (p: Project) => {
			// 	return p.id === project.id;
			// })
		}).catch((err) => {
			console.log(err);
		});
	}


}
