import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonsModule } from "common/commons.module";
import { AdminComponent } from "app/admin/admin.component";
import { FormsModule } from "@angular/forms";

@NgModule({
	          imports     : [
		          BrowserModule,
		          CommonsModule,
		          FormsModule
	          ],
	          declarations: [
		          AdminComponent
	          ],
	          bootstrap   : []
          })
export class AdminModule {
}