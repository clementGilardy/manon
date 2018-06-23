import { Image } from "app/admin/image";
import * as _ from 'lodash';
import { Utils } from "common/class/utils";
import * as moment from 'moment';
import { Categorie } from "app/admin/categories/categorie";
import { C } from "@angular/core/src/render3";

export class Project {
	public id: string;
	public titre: string;
	public categories: Array<Categorie>;
	public description: string;
	public miniature: Image;
	public images: Array<Image>;
	public createAt: Date;
	public displayDate: string;
	public errors: Array<string>;
	public order: number;

	constructor() {
		this.images     = new Array<Image>();
		this.images     = [new Image()];
		this.miniature  = new Image();
		this.createAt   = new Date();
		this.errors     = new Array<string>();
		this.categories = new Array<Categorie>();
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
		this.categories  = projet.categories ? this.initCategories(projet.categories) : new Array<Categorie>();
		this.description = projet.description;
		this.miniature   = projet.miniature ? new Image().init(projet.miniature) : new Image();
		this.images      = projet.images ? this.initImage(projet.images) : new Array<Image>();
		this.createAt    = projet.createAt;
		this.order       = projet.order;
		this.displayDate = moment(this.createAt).format('DD/MM/YYYY h:m:s');

		return this;
	}

	initCategories(categories: any): Array<Categorie> {
		const cats = new Array<Categorie>();
		categories.forEach((categorie: any) => {
			cats.push(new Categorie().init(categorie));
		});
		return cats;
	}

	initImage(images: Array<any>): Array<Image> {
		const imgs = new Array<Image>();
		images.forEach((image: any) => {
			imgs.push(new Image().init(image));
		});
		return imgs;
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

		if (Utils.isEmpty(this.categories)) {
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