import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from "app/projects/projects.component";
import { ProjectComponent } from "app/projects/project/project.component";

const routes: Routes = [
	{
		path     : '',
		component: ProjectsComponent
	},
	{path: ':id', component: ProjectComponent}
];

@NgModule({
	          imports: [RouterModule.forChild(routes)],
	          exports: [RouterModule]
          })
export class ProjectsRoutingModule {
}