import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from "app/admin/project";
import { ProjectService } from "common/services/project.service";
import * as _ from 'lodash';

@Component({
	           selector   : 'app-listproject',
	           templateUrl: 'listProject.component.html',
	           styleUrls  : ['listProject.component.scss']
           })
export class ListProjectComponent {
	@Input() projects: Array<Project>;
	@Output() delete: EventEmitter<Array<Project>>;

	constructor(private projectService: ProjectService) {
		this.delete = new EventEmitter<Array<Project>>();
	}

	deleteProjet(project: Project) {
		this.projectService.delete(project.id).then(() => {
			_.remove(this.projects, (p: Project) => {
				return p.id === project.id;
			})
		}).catch((err) => {
			console.log(err);
		});
	}


}
