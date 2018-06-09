import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProjectsComponent } from "app/projects/projects.component";
import { ProjectComponent } from "app/projects/project/project.component";
import { CommonsModule } from "common/commons.module";
import { NavprojectComponent } from "app/projects/nav-project/navproject.component";
import { RouterModule } from "@angular/router";

@NgModule({
	          imports     : [
		          BrowserModule,
		          CommonsModule,
		          RouterModule
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