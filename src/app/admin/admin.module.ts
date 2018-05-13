import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonsModule } from "common/commons.module";
import { AdminComponent } from "app/admin/admin.component";
import { FormsModule } from "@angular/forms";
import { AdminRouting } from "app/admin/admin.routing";
import { AdministrationComponent } from "app/admin/administration/administration.component";
import { AddProjectComponent } from "app/admin/addProject/addProject.component";

@NgModule({
	          imports     : [
		          BrowserModule,
		          CommonsModule,
		          FormsModule,
		          AdminRouting
	          ],
	          declarations: [
		          AdminComponent,
		          AdministrationComponent,
		          AddProjectComponent
	          ],
	          bootstrap   : []
          })
export class AdminModule {
}