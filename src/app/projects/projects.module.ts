import { NgModule } from '@angular/core';
import { ProjectsComponent } from "app/projects/projects.component";
import { ProjectComponent } from "app/projects/project/project.component";
import { CommonsModule } from "common/commons.module";
import { CommonModule } from "@angular/common";
import { ProjectsRoutingModule } from "app/projects/projects.routing";
import { HttpClientModule } from "@angular/common/http";
import { CategorieService } from "common/services/categorie.service";
import { ProjectService } from "common/services/project.service";

@NgModule({
	          imports     : [
		          CommonsModule,
		          CommonModule,
		          HttpClientModule,
		          ProjectsRoutingModule
	          ],
	          declarations: [
		          ProjectsComponent,
		          ProjectComponent
	          ],
	          providers   : [CategorieService, ProjectService]
          })
export class ProjectsModule {
}