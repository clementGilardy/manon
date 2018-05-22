import { Component, Input } from '@angular/core';
import { Project } from "app/admin/project";
import { ProjectService } from "common/services/project.service";

@Component({
	           selector   : 'app-listproject',
	           templateUrl: 'listProject.component.html',
	           styleUrls  : ['listProject.component.scss']
           })
export class ListProjectComponent {
	@Input() projects: Array<Project>;

	constructor() {
	}
}
