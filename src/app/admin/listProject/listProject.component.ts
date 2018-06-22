import { Component, OnInit } from '@angular/core';
import { Project } from "app/admin/project";
import { ProjectService } from "common/services/project.service";
import { ToastrService } from 'ngx-toastr';
import * as _ from 'lodash';
import * as moment from 'moment';
import { DragulaService } from "ng2-dragula";

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

	constructor(private projectService: ProjectService, private toast: ToastrService, private dragService: DragulaService) {
		this.projects = new Array<Project>();
		this.dragService.drop.subscribe(() => {
			for (let i = 0 ; i < this.projects.length ; i++) {
				this.projects[i].order = this.projects.length - i;
			}
			this.projectService.updateOrderProject(this.projects).subscribe(() => {
			}, (err) => {
				console.log(err);
				this.toast.error("Une erreur c'est produite pendant la réorganisation des projets", null, {progressBar: true});
			});
		});
	}

	ngOnInit() {

		this.projectService.getAll().then((result: any) => {
			result.forEach((projet: Project) => {
				this.projects.push(new Project().init(projet));
			});
			this.projects.sort((a: Project, b: Project) => {
				if (a.order > b.order) return -1;
				if (a.order < b.order) return 1;
				return 0;
			})
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
			console.log('delete projet');
			this.projects = _.without(this.projects, project);
			this.toast.success("Projet supprimer avec succes.", null, options);
		}).catch((err) => {
			this.toast.success("Impossible de supprimer ce projet.", null, options);
		});
	}


}
