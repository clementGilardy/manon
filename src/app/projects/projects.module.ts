import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProjectsComponent } from "app/projects/projects.component";
import { ProjectComponent } from "app/projects/project/project.component";
import { CommonsModule } from "common/commons.module";
import { NavprojectComponent } from "app/projects/nav-project/navproject.component";

@NgModule({
	          imports     : [
		          BrowserModule,
		          CommonsModule
	          ],
	          declarations: [
		          ProjectsComponent,
		          ProjectComponent,
		          NavprojectComponent
	          ],
	          bootstrap   : []
          })
export class ProjectsModule {
}