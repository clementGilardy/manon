import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from "app/AccueilComponent/accueil.component";

const appRoutes: Routes = [
	{path: '', component: AccueilComponent}
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
