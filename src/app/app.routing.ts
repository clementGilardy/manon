import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "app/accueil/home/home.component";
import { ProjectsComponent } from "app/projects/projects.component";
import { ProjectComponent } from "app/projects/project/project.component";

const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'projects', component: ProjectsComponent},
	{path: 'projects/:id', component: ProjectComponent},
	{
		path      : '',
		redirectTo: '/',
		pathMatch : 'full'
	}
];

@NgModule({
	          imports: [
		          RouterModule.forRoot(
			          appRoutes, {useHash:true}
		          )
	          ],
	          exports: [
		          RouterModule
	          ]
          })
export class RoutingModule {
}
