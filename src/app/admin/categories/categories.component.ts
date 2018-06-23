import { Component, OnInit } from '@angular/core';
import { Categorie } from "app/admin/categories/categorie";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CategorieService } from "common/services/categorie.service";
import { ToastrService } from "ngx-toastr";

@Component({
	           selector   : 'app-categories',
	           templateUrl: './categories.component.html',
	           styleUrls  : ['./categories.component.scss']
           })
export class CategoriesComponent implements OnInit {
	public categorie: Categorie;
	public categories: Array<Categorie>;
	public form: FormGroup;

	constructor(private catService: CategorieService, private toast: ToastrService) {
		this.categorie  = new Categorie();
		this.categories = new Array<Categorie>();
	}

	ngOnInit() {
		this.form = new FormGroup({
			                          name: new FormControl('', {validators: Validators.required}),
		                          });
		this.catService.getAll().then((res: any) => {
			res.forEach((cat) => {
				this.categories.push(new Categorie().init(cat));
			})
		});
	}

	addCategorie() {
		this.catService.saveCategorie(this.categorie).subscribe((res: any) => {
			this.toast.success("La categorie à été ajouté avec succes.", null, {progressBar: true});
			this.categories.push(this.categorie);
		}, (err: any) => {
			this.toast.error("Impossible d'ajouter la categorie.", null, {progressBar: true});
		});
	}

}
