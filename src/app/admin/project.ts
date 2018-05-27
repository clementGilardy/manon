import { Image } from "app/admin/image";
import * as _ from 'lodash';

export class Project {
	public id: string;
	public titre: string;
	public categorie: string;
	public description: string;
	public miniature: Image;
	public images: Array<Image>;
	public createAt: Date;

	constructor() {
		this.images    = new Array<Image>();
		this.images    = [new Image()];
		this.miniature = new Image();
		this.createAt  = new Date();
	}

	init(projet: Project): Project {
		this.id          = projet.id || projet['_id'];
		this.titre       = projet.titre;
		this.categorie   = projet.categorie;
		this.description = projet.description;
		this.miniature   = projet.miniature ? projet.miniature : new Image();
		this.images      = projet.images ? projet.images : new Array();
		this.createAt    = projet.createAt;
		return this;
	}

	addImage(): void {
		this.images.push(new Image());
	}

	deleteImage(image: Image): void {
		this.images = _.without(this.images, image);
	}
}