import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from "common/components/footer/footer.component";
import { NavComponent } from "common/components/nav/nav.component";
import { ProjectService } from "common/services/project.service";
import { RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "common/components/pageNotFound/pageNotFound.component";

@NgModule({
	          exports     : [FooterComponent, NavComponent],
	          imports     : [
		          BrowserModule,
		          RouterModule
	          ],
	          declarations: [
		          FooterComponent,
		          NavComponent,
		          PageNotFoundComponent
	          ],
	          providers   : [ProjectService],
	          bootstrap   : []
          })
export class CommonsModule {
}