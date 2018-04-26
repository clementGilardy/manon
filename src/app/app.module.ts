import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AccueilComponent } from "app/AccueilComponent/accueil.component";
import { RoutingModule } from "app/app.routing";


@NgModule({
	          declarations: [
		          AppComponent,
		          AccueilComponent
	          ],
	          imports     : [
		          BrowserModule,
		          RoutingModule
	          ],
	          providers   : [],
	          bootstrap   : [AppComponent]
          })
export class AppModule {
}
