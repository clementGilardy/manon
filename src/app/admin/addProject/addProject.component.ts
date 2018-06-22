import { Component } from '@angular/core';
import { Project } from "app/admin/project";
import { ProjectService } from "common/services/project.service";
import { ToastrService } from 'ngx-toastr';

const options = {
	progressBar: true
};

@Component({
	           selector   : 'app-addproject',
	           templateUrl: 'addProject.component.html',
	           styleUrls  : ['addProject.component.scss']
           })
export class AddProjectComponent {
	public project: Project;

	constructor(private projectService: ProjectService, private toast: ToastrService) {
		this.project = new Project();
	}

	/**
	 * Ajoute le projet
	 */
	addProject(): void {
		if (this.project.checkError()) {
			this.project.errors.forEach((error) => {
				this.toast.error(error, null, options);
			});
		} else {
			this.projectService
			    .saveProject(this.project)
			    .subscribe((res: any) => {
				    this.project.id = res.project._id;
				    this.toast.success('Projet ajouté avec success.', null, options);
			    }, () => {
				    this.toast.error("Impossible d'ajouter le projet.", null, options);
			    });
		}
	}
}