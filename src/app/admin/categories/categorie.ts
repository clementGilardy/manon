export class Categorie {
	public name: string;
	public selected: boolean;

	constructor() {
		this.selected = false;
	}

	init(c: any) {
		this.name     = c.name;
		this.selected = c.selected ? c.selected : false;
		return this;
	}
}