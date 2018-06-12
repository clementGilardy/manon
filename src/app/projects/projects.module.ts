import { NgModule } from '@angular/core';
import { ProjectsComponent } from "app/projects/projects.component";
import { ProjectComponent } from "app/projects/project/project.component";
import { CommonsModule } from "common/commons.module";
import { NavprojectComponent } from "app/projects/nav-project/navproject.component";
import { CommonModule } from "@angular/common";
import { ProjectsRoutingModule } from "app/projects/projects.routing";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
	          imports     : [
		          CommonsModule,
		          CommonModule,
		          HttpClientModule,
		          ProjectsRoutingModule
	          ],
	          declarations: [
		          ProjectsComponent,
		          ProjectComponent,
		          NavprojectComponent
	          ]
          })
export class ProjectsModule {
}