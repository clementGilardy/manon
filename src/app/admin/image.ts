import * as moment from 'moment';

export class Image {
	public name: string;
	public description: string;
	public type: string;
	public extension: string;
	public img: any;

	constructor() {
		this.name        = moment().format('x');
		this.description = '';
		this.img         = null;
	}

	handleFileInput(files: FileList) {
		let reader = new FileReader();
		const file = files.item(0);
		reader.readAsDataURL(file);
		reader.onload = () => {
			this.name      = moment().format('x');
			this.img       = reader.result.split(',')[1];
			this.extension = file.name.split('.').pop();
			this.type      = file.type;
		};
	}
}