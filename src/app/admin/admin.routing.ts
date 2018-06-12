import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProjectComponent } from "app/admin/addProject/addProject.component";
import { ListProjectComponent } from "app/admin/listProject/listProject.component";
import { AuthGuard } from "app/admin/AuthGuard";
import { AdministrationComponent } from "app/admin/administration/administration.component";

const adminRoutes: Routes = [
	{path: '', component: AdministrationComponent},
	{path: 'list', canActivate: [AuthGuard], component: ListProjectComponent},
	{path: 'add', canActivate: [AuthGuard], component: AddProjectComponent},
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
