import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from "common/components/footer/footer.component";
import { NavComponent } from "common/components/nav/nav.component";
import { ProjectService } from "common/services/project.service";

@NgModule({
	          exports     : [FooterComponent, NavComponent],
	          imports     : [
		          BrowserModule
	          ],
	          declarations: [
		          FooterComponent,
		          NavComponent
	          ],
	          providers   : [ProjectService],
	          bootstrap   : []
          })
export class CommonsModule {
}