import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from "app/admin/administration/administration.component";
import { AddProjectComponent } from "app/admin/addProject/addProject.component";
import { ListProjectComponent } from "app/admin/listProject/listProject.component";

const adminRoutes: Routes = [
	{path: 'admin', component: AdministrationComponent},
	{path: 'admin/add', component: AddProjectComponent},
	{path: 'admin/list', component: ListProjectComponent},
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
