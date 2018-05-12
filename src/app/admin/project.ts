import { Image } from "app/admin/image";

export class Project {
	public titre: string;
	public categorie: string;
	public description: string;
	public miniature: Image;
	public images: Array<Image>;

	constructor() {
		this.images    = new Array<Image>();
		this.images    = [new Image()];
		this.miniature = new Image();
	}

	addImage() {
		this.images.push(new Image());
	}
}