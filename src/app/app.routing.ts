import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from "common/components/pageNotFound/pageNotFound.component";

const appRoutes: Routes = [
	{path: '', loadChildren: 'app/accueil/accueil.module#AccueilModule'},
	{path: 'portfolio', loadChildren: 'app/projects/projects.module#ProjectsModule'},
	{path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule'},
	{path: 'mentions', loadChildren: 'app/mentions-legal/mentions-legal.module#MentionsLegalModule'},
	{path: '**', component: PageNotFoundComponent}
];

@NgModule({
	          imports: [
		          RouterModule.forRoot(
			          appRoutes, {useHash: true}
		          )
	          ],
	          exports: [
		          RouterModule
	          ]
          })
export class AppRoutingModule {
}
