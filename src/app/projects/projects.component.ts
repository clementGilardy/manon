import { Component, OnInit } from '@angular/core';
import { ProjectService } from "common/services/project.service";
import { Project } from "app/admin/project";
import { Categorie } from "app/admin/categories/categorie";
import { CategorieService } from "common/services/categorie.service";
import * as _ from 'lodash';

declare var $: any;

@Component({
	           selector   : 'app-projects',
	           templateUrl: 'projects.component.html',
	           styleUrls  : ['projects.component.scss']
           })
export class ProjectsComponent implements OnInit {
	public projects: Array<Project>;
	public categories: Array<Categorie>;
	public displayProject: Array<Project>;
	public time: number;

	constructor(private projectService: ProjectService, private catService: CategorieService) {
		this.projects       = new Array<Project>();
		this.displayProject = new Array<Project>();
		this.categories     = new Array<Categorie>();
		this.categories.push(new Categorie().init({name: 'TOUT', selected: true}));
		this.time = 500;
	}

	ngOnInit() {
		this.projectService.getAll().then((result: Array<Project>) => {
			this.projects = result;
			return this.catService.getAll();
		}).then((res: any) => {
			res.forEach((cat) => {
				this.categories.push(new Categorie().init(cat));
			});
			this.displayProject = this.projects;
		});
	}

	filter(cat: Categorie) {
		this.unselectedCategories();
		cat.selected        = true;
		this.displayProject = this.projects.filter((project) => {
			if (cat.name !== 'TOUT') {
				return _.find(project.categories, {name: cat.name});
			} else {
				return true;
			}
		});
	}

	unselectedCategories() {
		this.categories.forEach((cat: Categorie) => {
			cat.selected = false;
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
