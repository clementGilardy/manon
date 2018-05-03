import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from "common/components/footer/footer.component";
import { NavComponent } from "common/components/nav/nav.component";

@NgModule({
	          exports     : [FooterComponent, NavComponent],
	          imports     : [
		          BrowserModule
	          ],
	          declarations: [
		          FooterComponent,
		          NavComponent
	          ],
	          bootstrap   : []
          })
export class CommonsModule {
}