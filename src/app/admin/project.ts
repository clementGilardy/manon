import { Image } from "app/admin/image";
import * as _ from 'lodash';
import { Utils } from "common/class/utils";

export class Project {
	public id: string;
	public titre: string;
	public categorie: string;
	public description: string;
	public miniature: Image;
	public images: Array<Image>;
	public createAt: Date;
	public errors: Array<string>;

	constructor() {
		this.images    = new Array<Image>();
		this.images    = [new Image()];
		this.miniature = new Image();
		this.createAt  = new Date();
		this.errors    = new Array<string>();
	}

	/**
	 * Initiualize le projet
	 *
	 * @param {Project} projet
	 * @returns {Project}
	 */
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

	/**
	 * Ajoute une image au projet
	 */
	addImage(): void {
		this.images.push(new Image());
	}

	/**
	 * check les différentes erreurs dans le foormulaire de projet
	 */
	checkError(): boolean {
		let numberError = 0;
		this.errors     = new Array<string>();
		if (Utils.stringIsEmpty(this.titre)) {
			this.errors.push('Le titre doit être renseigné');
			numberError++;
		}

		if (Utils.stringIsEmpty(this.categorie)) {
			this.errors.push('Les catégories doivent être renseignées');
			numberError++;
		}

		if (Utils.stringIsEmpty(this.description)) {
			this.errors.push('La description doit être renseignée');
			numberError++;
		}

		if (!this.miniature.isNotEmpty()) {
			this.errors.push('Le projet doit contenir une miniature');
			numberError++;
		}

		this.images.forEach((image: Image) => {
			if (!image.isNotEmpty()) {
				this.errors.push('Le projet doit contenir au moins une image');
				numberError++;
			}
		});

		return (numberError >= 1);
	}


	/**
	 * Supprime une image du projet
	 * @param {Image} image
	 */
	deleteImage(image: Image): void {
		this.images = _.without(this.images, image);
	}
}