import { Component } from '@angular/core';
import { LocalStorageService } from "common/services/localStorage.service";
import { Utils } from "common/class/utils";
import * as moment from 'moment';

@Component({
	           selector   : 'app-administration',
	           templateUrl: 'administration.component.html',
	           styleUrls  : ['administration.component.scss']
           })
export class AdministrationComponent {
	public displayForm: boolean;

	constructor(private localStorage: LocalStorageService) {
		this.displayForm = (!Utils.isEmpty(this.localStorage.get('token')) && this.isLoggedIn());
	}

	public isLoggedIn(): boolean {
		return moment().isBefore(this.getExpiration());
	}

	getExpiration() {
		const expiration = localStorage.getItem("expire_at");
		return new Date(expiration);
	}

	treatementLog(event: boolean) {
		this.displayForm = event;
	}
}
