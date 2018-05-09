export class Project {
	public titre: string;
	public categorie: string;
	public description: string;
	public images: Array<any>;

	constructor() {
		this.images = new Array<any>();
		this.images = [{name: '', img: ''}];
	}

	addImage() {
		this.images.push({name: '', img: ''});
	}

	addProject() {
		console.log(this.images);
	}
}