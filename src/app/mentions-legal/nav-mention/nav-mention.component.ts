import { Component, ElementRef, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from "@angular/common";

declare var $: any;

@Component({
	           selector   : 'app-nav-mention',
	           templateUrl: './nav-mention.component.html',
	           styleUrls  : ['./nav-mention.component.scss']
           })
export class NavMentionComponent implements OnInit {

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

	/**
	 * Controle du scroll
	 */
	@HostListener("window:scroll", [])
	onWindowScroll() {
		const offset = this.document.documentElement.scrollTop;
		if (offset > this.lastScrolledTop && offset > 80) {
			$('#' + this.navigation.nativeElement.id).fadeOut(500);
		} else {
			$('#' + this.navigation.nativeElement.id).fadeIn(500);
		}

		this.lastScrolledTop = offset;
	}

}