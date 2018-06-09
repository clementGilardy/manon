import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RoutingModule } from "app/app.routing";
import { MaterializeModule } from "angular2-materialize";
import { AccueilModule } from "app/accueil/accueil.module";
import { ProjectsModule } from "app/projects/projects.module";
import { AdminModule } from "app/admin/admin.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
	          declarations: [
		          AppComponent
	          ],
	          imports     : [
		          BrowserModule,
		          RoutingModule,
		          MaterializeModule,
		          AccueilModule,
		          ProjectsModule,
		          AdminModule,
		          ReactiveFormsModule,
		          FormsModule,
	          ],
	          providers   : [],
	          bootstrap   : [AppComponent]
          })
export class AppModule {
}
