import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from "app/admin/administration/administration.component";
import { AddProjectComponent } from "app/admin/addProject/addProject.component";

const adminRoutes: Routes = [
	{path: 'admin', component: AdministrationComponent},
	{path: 'admin/add', component: AddProjectComponent},
	{
		path      : '',
		redirectTo: '/',
		pathMatch : 'full'
	}
];

@NgModule({
	          imports: [
		          RouterModule.forChild(
			          adminRoutes
		          )
	          ],
	          exports: [
		          RouterModule
	          ]
          })
export class AdminRouting {
}
