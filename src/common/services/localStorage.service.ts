import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

	constructor() {
	}

	add(key: string, val: any): void {
		window.localStorage.setItem(key, val);
	}

	get(key: string) {
		return window.localStorage.getItem(key);
	}

	delete(key: string) {
		window.localStorage.removeItem(key);
	}

	clear() {
		window.localStorage.clear();
	}

}