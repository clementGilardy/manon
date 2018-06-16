import { Component, OnInit } from '@angular/core';
import { Project } from "app/admin/project";
import { ProjectService } from "common/services/project.service";
import { ToastrService } from 'ngx-toastr';

const options = {
	progressBar: true
};

@Component({
	           selector   : 'app-listproject',
	           templateUrl: 'listProject.component.html',
	           styleUrls  : ['listProject.component.scss']
           })
export class ListProjectComponent implements OnInit {
	public projects: Array<Project>;

	constructor(private projectService: ProjectService, private toast: ToastrService) {
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

	/**
	 * Supprime le projet
	 * @param {Project} project
	 */
	deleteProjet(project: Project): void {
		this.projectService.delete(project.id).then(() => {
			this.toast.success("Projet supprimer avec succes.", null, options);
		}).catch((err) => {
			this.toast.success("Impossible de supprimer ce projet.", null, options);
		});
	}


}
