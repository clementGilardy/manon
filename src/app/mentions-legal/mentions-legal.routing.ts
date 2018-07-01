import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MentionsComponent } from "app/mentions-legal/mentions/mentions.component";

const appRoutes: Routes = [
	{path: '', component: MentionsComponent}
];

@NgModule({
	          imports: [
		          RouterModule.forChild(
			          appRoutes
		          )
	          ],
	          exports: [
		          RouterModule
	          ]
          })
export class MentionsLegalRouting {
}
