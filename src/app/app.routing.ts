import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "app/accueil/home/home.component";
import { ProjectsComponent } from "app/projects/projects.component";
import { AdminComponent } from "app/admin/admin.component";
import { AdminRouting } from "app/admin/admin.routing";

const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'projects', component: ProjectsComponent},
	{
		path      : '',
		redirectTo: '/',
		pathMatch : 'full'
	}
];

@NgModule({
	          imports: [
		          RouterModule.forRoot(
			          appRoutes
		          )
	          ],
	          exports: [
		          RouterModule
	          ]
          })
export class RoutingModule {
}
