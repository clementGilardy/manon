import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
	           selector   : 'app-competence',
	           templateUrl: 'competence.component.html',
	           styleUrls  : ['competence.component.scss']
           })
export class CompetenceComponent implements OnInit {
	public graphisme: string;
	public webDesign: string;
	public illustration: string;

	constructor() {
		this.graphisme = "Je vous accompagne dans la création de tout type de projet graphique. Allant du simple flyer au développement de votre identité visuelle complète.";
		this.webDesign = "Je réalise le design de votre futur site web, newsletters, landing page ou divers visuels de communication online.";
		this.illustration = "Besoin d'un illustrateur ? Vous êtes au bon endroit ! Je réaliserais pour vous tout type d'illustrations pour booster votre identité.";
	}

	ngOnInit() {
		$('#competence-mobile .three-comptence').slick({dots: true});
	}
}
