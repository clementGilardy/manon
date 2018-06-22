import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProjectService } from "common/services/project.service";
import { Project } from "app/admin/project";
import { ToastrService } from "ngx-toastr";

@Component({
	           selector   : 'app-update-project',
	           templateUrl: './update-project.component.html',
	           styleUrls  : ['./update-project.component.css']
           })
export class UpdateProjectComponent implements OnInit {

	public project: Project;

	constructor(private route: ActivatedRoute, private projectService: ProjectService, private toastr: ToastrService) {
		this.project = new Project();
	}

	ngOnInit() {
		this.route.params.subscribe((params) => {
			this.projectService.get(params.id).then((p: Project) => {
				this.project.init(p);
			})
		});
	}

	updateProject() {
		this.projectService.updateProject(this.project).subscribe((result) => {
			this.toastr.success('Projet mis à jour avec succes', null, {progressBar: true});
			console.log(result);
		}, (err) => {
			console.log(err);
			this.toastr.error('Impossible de mettre à jour le projet', null, {progressBar: true});
		});
	}
}
