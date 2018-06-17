import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProjectService } from "common/services/project.service";
import { Project } from "app/admin/project";
import { animate, state, style, transition, trigger } from "@angular/animations";

declare var $: any;

@Component({
	           selector   : 'app-project',
	           templateUrl: 'project.component.html',
	           styleUrls  : ['project.component.scss'],
	           animations : [
		           trigger('enterOpacity', [
			           state('true', style({opacity: '0.3'})),
			           state('false', style({opacity: '1'})),
			           transition('false <=> true', animate(500))
		           ]),
		           trigger('enterDisplay', [
			           state('true', style({opacity: '1'})),
			           state('false', style({opacity: '0'})),
			           transition('false <=> true', animate(500))
		           ])
	           ]
           })
export class ProjectComponent implements OnInit {
	public projects: Array<Project>;
	@ViewChild('caption') caption: ElementRef;
	@ViewChild('image') image: ElementRef;
	public enter: boolean;

	constructor(private projectService: ProjectService) {
		this.enter = false;
	}

	display() {
		this.enter                                  = true;
		this.caption.nativeElement.style['display'] = 'block';
	}

	hide() {
		this.caption.nativeElement.style['display'] = 'none';
		this.enter                                  = false;
	}

	ngOnInit() {
		this.projectService.getByLimit(3).then((result: Array<Project>) => {
			this.projects = result;
		}).catch((err) => {
			console.log(err);
		});
	}
}
