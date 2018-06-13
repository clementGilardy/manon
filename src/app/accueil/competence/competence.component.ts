import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
	           selector   : 'app-competence',
	           templateUrl: 'competence.component.html',
	           styleUrls  : ['competence.component.scss']
           })
export class CompetenceComponent implements OnInit {
	constructor() {
	}

	ngOnInit() {
		$('#competence-mobile .three-comptence').slick();
	}
}
