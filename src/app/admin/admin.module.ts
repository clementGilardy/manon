import { NgModule } from '@angular/core';
import { CommonsModule } from "common/commons.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdminRouting } from "app/admin/admin.routing";
import { AdministrationComponent } from "app/admin/administration/administration.component";
import { AddProjectComponent } from "app/admin/addProject/addProject.component";
import { ListProjectComponent } from "app/admin/listProject/listProject.component";
import { LocalStorageService } from "common/services/localStorage.service";
import { LoginComponent } from "app/admin/login/login.component";
import { TokenService } from "common/services/token.service";
import { AuthGuard } from "app/admin/AuthGuard";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { CategoriesComponent } from "app/admin/categories/categories.component";
import { UpdateProjectComponent } from "app/admin/update-project/update-project.component";
import { DragulaModule } from "ng2-dragula";
import { CategorieService } from "common/services/categorie.service";

@NgModule({
	          imports     : [
		          CommonsModule,
		          CommonModule,
		          FormsModule,
		          ReactiveFormsModule,
		          HttpClientModule,
		          AdminRouting,
		          DragulaModule
	          ],
	          declarations: [
		          AdministrationComponent,
		          AddProjectComponent,
		          ListProjectComponent,
		          LoginComponent,
		          CategoriesComponent,
		          UpdateProjectComponent
	          ],
	          providers   : [LocalStorageService, TokenService, AuthGuard, CategorieService]
          })
export class AdminModule {
}