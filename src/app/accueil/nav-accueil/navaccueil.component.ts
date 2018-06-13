import { Component, ElementRef, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from "@angular/common";

declare var $: any;

@Component({
	           selector   : 'app-navaccueil',
	           templateUrl: 'navaccueil.component.html',
	           styleUrls  : ['navaccueil.component.scss']
           })
export class NavaccueilComponent implements OnInit {
	@ViewChild('nav') navigation: ElementRef;
	private lastScrolledTop: number;
	private delta: number;

	constructor(@Inject(DOCUMENT) private document: Document) {
		this.lastScrolledTop = 0;
		this.delta           = 5;
	}

	ngOnInit() {
		$(".right.button-collapse").sideNav();
	}

	@HostListener("window:scroll", [])
	onWindowScroll() {
		const offset = this.document.documentElement.scrollTop;
		if (offset >= 0 && offset <= 100) {
			$('#' + this.navigation.nativeElement.id).css('background', 'none');
			$('#' + this.navigation.nativeElement.id + ' a').css('color', 'white');
		} else {
			$('#' + this.navigation.nativeElement.id).css('background', 'white');
			$('#' + this.navigation.nativeElement.id + ' a').css('color', 'black');
		}

		if (offset > this.lastScrolledTop && offset > 80) {
			$('#' + this.navigation.nativeElement.id).fadeOut(500);
		} else {
			$('#' + this.navigation.nativeElement.id).fadeIn(500);
		}

		this.lastScrolledTop = offset;
	}
}

