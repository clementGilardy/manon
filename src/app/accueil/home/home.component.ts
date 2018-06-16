import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

declare var $: any;

@Component({
	           selector   : 'app-home',
	           templateUrl: 'home.component.html',
	           styleUrls  : ['home.component.scss']
           })
export class HomeComponent implements OnInit {
	private fragment: string;

	constructor(private route: ActivatedRoute) {

	}

	ngOnInit(): void {
		this.route.fragment.subscribe((frag: string) => {
			this.fragment = frag;
			if (this.fragment !== null)
				document.querySelector('#' + this.fragment).scrollIntoView();
		});
	}
}
