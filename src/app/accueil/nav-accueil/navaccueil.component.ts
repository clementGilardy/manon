import { Component, ElementRef, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { AuthGuard } from "app/admin/AuthGuard";

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
	public displayAdmin: boolean;

	constructor(@Inject(DOCUMENT) private document: Document, private auth: AuthGuard) {
		this.lastScrolledTop = 0;
		this.delta           = 5;
		this.displayAdmin    = false;
	}

	ngOnInit() {
		$(".right.button-collapse").sideNav();
		if (this.auth.canActivate()) {
			this.displayAdmin = true;
		}
	}

	/**
	 * Controle du scroll
	 */
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

