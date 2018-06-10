import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonsModule } from "common/commons.module";
import { AdminComponent } from "app/admin/admin.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdminRouting } from "app/admin/admin.routing";
import { AdministrationComponent } from "app/admin/administration/administration.component";
import { AddProjectComponent } from "app/admin/addProject/addProject.component";
import { ListProjectComponent } from "app/admin/listProject/listProject.component";
import { LocalStorageService } from "common/services/localStorage.service";
import { LoginComponent } from "app/admin/login/login.component";
import { TokenService } from "common/services/token.service";
import { AuthGuard } from "app/admin/AuthGuard";

@NgModule({
	          imports     : [
		          BrowserModule,
		          CommonsModule,
		          ReactiveFormsModule,
		          FormsModule,
		          AdminRouting
	          ],
	          declarations: [
		          AdminComponent,
		          AdministrationComponent,
		          AddProjectComponent,
		          ListProjectComponent,
		          LoginComponent
	          ],
	          providers   : [LocalStorageService, TokenService, AuthGuard],
	          bootstrap   : []
          })
export class AdminModule {
}