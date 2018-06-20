import { Component, OnInit } from '@angular/core';
import { ProjectService } from "common/services/project.service";
import { Project } from "app/admin/project";

declare var $: any;

@Component({
	           selector   : 'app-project',
	           templateUrl: 'project.component.html',
	           styleUrls  : ['project.component.scss']
           })
export class ProjectComponent implements OnInit {
	public projects: Array<Project>;
	public time: number;

	constructor(private projectService: ProjectService) {
		this.projects = new Array<Project>();
		this.time     = 500;
	}

	ngOnInit() {
		this.projectService.getByLimit(3).then((result: Array<Project>) => {
			this.projects = result;
		}).catch((err) => {
			console.log(err);
		});
	}

	display(id: string) {
		if (window.screen.width > 360) {
			$('#' + id + ' img').fadeTo(0, 1).fadeTo(this.time, 0.3);
			$('#' + id + ' .project-caption').fadeIn(this.time);
		}
	}


	hide(id: string) {
		if (window.screen.width > 360) {
			$('#' + id + ' img').fadeTo(0, 0.3).fadeTo(this.time, 1);
			$('#' + id + ' .project-caption').fadeOut(this.time);
		}
	}
}
