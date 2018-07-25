import { Component, ElementRef, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { AuthGuard } from "app/admin/AuthGuard";

declare var $: any;

@Component({
	           selector   : 'app-navigation',
	           templateUrl: './navigation.component.html',
	           styleUrls  : ['./navigation.component.scss']
           })
export class NavigationComponent implements OnInit {

	@ViewChild('nav') navigation: ElementRef;
	private lastScrolledTop: number;
	private delta: number;
	public displayAdmin: boolean;

	constructor(@Inject(DOCUMENT) private document: Document, private authGuard: AuthGuard) {
		this.lastScrolledTop                    = 0;
		this.delta                              = 5;
		this.displayAdmin                       = false;
		this.document.documentElement.scrollTop = 0;
	}

	ngOnInit() {
		$(".right.button-collapse").sideNav();
		if (this.authGuard.canActivate()) {
			this.displayAdmin = true;
		}
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
