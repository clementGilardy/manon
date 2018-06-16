import { Component, OnInit } from '@angular/core';
import { ProjectService } from "common/services/project.service";
import { Project } from "app/admin/project";
import { ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Component({
	           selector   : 'app-project',
	           templateUrl: 'project.component.html',
	           styleUrls  : ['project.component.scss']
           })
export class ProjectComponent implements OnInit {
	public project: Project;

	constructor(private projectService: ProjectService,
	            private route: ActivatedRoute,
	            private toast: ToastrService) {
		this.project = new Project();
	}

	ngOnInit() {
		this.route.params.subscribe((params) => {
			this.projectService.get(params['id']).then((projet: Project) => {
				this.project = projet;
			}).catch((err) => {
				console.log(err);
			});
		}, (err) => {
			console.log(err);
		});
	}
}
