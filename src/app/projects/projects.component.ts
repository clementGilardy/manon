import { Component, OnInit } from '@angular/core';
import { ProjectService } from "common/services/project.service";
import { Project } from "app/admin/project";

declare var $: any;

@Component({
	           selector   : 'app-projects',
	           templateUrl: 'projects.component.html',
	           styleUrls  : ['projects.component.scss']
           })
export class ProjectsComponent implements OnInit {
	public projects: Array<Project>;
	public time: number;

	constructor(private projectService: ProjectService) {
		this.projects = new Array<Project>();
		this.time = 500;
	}

	ngOnInit() {
		this.projectService.getAll().then((result: Array<Project>) => {
			this.projects = result;
		});
	}

	display(id: string) {
		$('#' + id + ' img').fadeTo(0, 1).fadeTo(this.time,0.3);
		$('#' + id + ' .project-caption').fadeIn(this.time);
	}


	hide(id: string) {
		$('#' + id + ' img').fadeTo(0, 0.3).fadeTo(this.time,1);
		$('#' + id + ' .project-caption').fadeOut(this.time);
	}
}
