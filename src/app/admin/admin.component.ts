import { Component } from '@angular/core';
import { Project } from "app/admin/project";

@Component({
	           selector   : 'app-admin',
	           templateUrl: 'admin.component.html',
	           styleUrls  : ['admin.component.scss']
           })
export class AdminComponent {
	public project: Project;

	constructor() {
		this.project = new Project();
	}
}