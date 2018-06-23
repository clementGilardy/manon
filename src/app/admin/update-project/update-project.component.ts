import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProjectService } from "common/services/project.service";
import { Project } from "app/admin/project";
import { ToastrService } from "ngx-toastr";
import { Categorie } from "app/admin/categories/categorie";
import * as _ from 'lodash';

import { CategorieService } from "common/services/categorie.service";

@Component({
	           selector   : 'app-update-project',
	           templateUrl: './update-project.component.html',
	           styleUrls  : ['./update-project.component.scss']
           })
export class UpdateProjectComponent implements OnInit {

	public project: Project;
	public categories: Array<Categorie>;

	constructor(private route: ActivatedRoute,
	            private projectService: ProjectService,
	            private toastr: ToastrService,
	            private catService: CategorieService) {
		this.project    = new Project();
		this.categories = new Array<Categorie>();

	}

	ngOnInit() {
		this.route.params.subscribe((params) => {
			this.projectService.get(params.id).then((p: Project) => {
				this.project.init(p);
				return this.catService.getAll();
			}).then((res: any) => {
				res.forEach((cat: any) => {
					this.categories.push(new Categorie().init(cat));
				});
				this.initCategories();
			});
		});
	}

	initCategories() {
		this.categories.forEach((cat: Categorie) => {
			if (_.find(this.project.categories, {name: cat.name})) {
				cat.selected = true;
			}
		});
	}

	addOrRemoveCat(cat: Categorie) {
		if (!_.find(this.project.categories, {name: cat.name})) {
			this.project.categories.push(cat);
			cat.selected = true;
		} else {
			this.project.categories = this.removeCat(cat);
			cat.selected            = false;
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

	updateProject() {
		this.projectService.updateProject(this.project).subscribe((result) => {
			this.toastr.success('Projet mis à jour avec succes', null, {progressBar: true});
		}, (err) => {
			console.log(err);
			this.toastr.error('Impossible de mettre à jour le projet', null, {progressBar: true});
		});
	}
}

declare var $: any;
