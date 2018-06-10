import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from "app/admin/administration/administration.component";
import { AddProjectComponent } from "app/admin/addProject/addProject.component";
import { ListProjectComponent } from "app/admin/listProject/listProject.component";
import { AuthGuard } from "app/admin/AuthGuard";
import { PageNotFoundComponent } from "common/components/pageNotFound/pageNotFound.component";

const adminRoutes: Routes = [
	{path: 'admin', component: AdministrationComponent},
	{path: 'admin/add', canActivate: [AuthGuard], component: AddProjectComponent},
	{path: 'admin/list', canActivate: [AuthGuard], component: ListProjectComponent},
	{
		path      : '',
		redirectTo: '/',
		pathMatch : 'full'
	},
	{path: '**', component: PageNotFoundComponent}
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
