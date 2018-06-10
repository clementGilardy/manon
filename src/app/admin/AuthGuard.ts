import { CanActivate } from "@angular/router";
import * as moment from "moment";
import { Utils } from "common/class/utils";
import { LocalStorageService } from "common/services/localStorage.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(private localStorage: LocalStorageService) {
	}

	canActivate() {
		let activated = false;
		if (!Utils.isEmpty(this.localStorage.get('token')) && this.isLoggedIn()) {
			activated = true;
		}
		return activated;
	}

	public isLoggedIn() {
		return moment().isBefore(this.getExpiration());
	}

	getExpiration() {
		const expiration = localStorage.getItem("expire_at");
		return moment(expiration);
	}
}