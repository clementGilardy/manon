import * as moment from 'moment';

export class Image {
	public name: string;
	public description: string;
	public type: string;
	public extension: string;
	public img: any;
	public createAt: Date;

	constructor() {
		this.name        = moment().format('x');
		this.description = '';
		this.img         = null;
		this.createAt    = new Date();
	}

	init(image: any) {
		this.name        = image.name;
		this.description = image.description;
		this.extension   = image.extension;
		this.img         = null;
		return this;
	}

	isNotEmpty() {
		return (this.img !== null);
	}

	/**
	 * Convertie une image en binaire pour pouvoir la passer au back
	 * @param event
	 */
	handleFileInput(event: any): void {
		if (event.target.files.length > 0) {
			let reader = new FileReader();
			const file = event.target.files.item(0);
			reader.readAsDataURL(file);
			reader.onload = () => {
				this.name      = moment().format('x');
				this.img       = reader.result.split(',')[1];
				this.extension = file.name.split('.').pop();
				this.type      = file.type;
				this.createAt  = new Date();
			};
		}
	}
}