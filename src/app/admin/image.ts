export class Image {
	public name: string;
	public description: string;
	public image: any;

	constructor() {
		this.name        = '';
		this.description = '';
		this.image       = null;
	}

	handleFileInput(files: FileList) {
		let reader = new FileReader();
		const file = files.item(0);
		reader.readAsDataURL(file);
		reader.onload = () => {
			this.image = reader.result.split(',')[1];
		};
	}
}