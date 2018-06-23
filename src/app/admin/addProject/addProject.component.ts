import { Component, OnInit } from '@angular/core';
import { Project } from "app/admin/project";
import { ProjectService } from "common/services/project.service";
import { ToastrService } from 'ngx-toastr';
import { Categorie } from "app/admin/categories/categorie";
import { CategorieService } from "common/services/categorie.service";
import * as _ from 'lodash';

declare var $: any;

const options = {
	progressBar: true
};

@Component({
	           selector   : 'app-addproject',
	           templateUrl: 'addProject.component.html',
	           styleUrls  : ['addProject.component.scss']
           })
export class AddProjectComponent implements OnInit {
	public project: Project;
	public categories: Array<Categorie>;

	constructor(private projectService: ProjectService, private toast: ToastrService, private catService: CategorieService) {
		this.project    = new Project();
		this.categories = new Array<Categorie>();
	}

	ngOnInit() {
		this.catService.getAll().then((res: any) => {
			res.forEach((cat: any) => {
				this.categories.push(new Categorie().init(cat));
			})
		});
	}

	addOrRemoveCat(cat: Categorie) {
		if (!_.find(this.project.categories, {name: cat.name})) {
			cat.selected = true;
			this.project.categories.push(cat);
		} else {
			cat.selected            = false;
			this.project.categories = this.removeCat(cat);
		}
	}

	removeCat(cat) {
		const cats = [];
		this.project.categories.forEach((categorie: Categorie) => {
			if (categorie.name !== cat.name) {
				cats.push(categorie);
			}
		});
		return cats;
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