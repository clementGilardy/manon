import { Image } from "app/admin/image";
import * as _ from 'lodash';

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

	init(projet: Project) {
		this.titre       = projet.titre;
		this.categorie   = projet.categorie;
		this.description = projet.description;
		this.miniature   = projet.miniature ? projet.miniature : new Image();
		this.images      = projet.images ? projet.images : new Array();
	}

	addImage() {
		this.images.push(new Image());
	}

	deleteImage(image: Image) {
		this.images = _.without(this.images, image);
	}
}