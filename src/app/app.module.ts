import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from "app/app.routing";
import { FormsModule } from "@angular/forms";
import { PageNotFoundComponent } from "common/components/pageNotFound/pageNotFound.component";
import { MaterializeModule } from "angular2-materialize";

@NgModule({
	          declarations: [
		          AppComponent,
		          PageNotFoundComponent
	          ],
	          imports     : [
		          BrowserModule,
		          FormsModule,
		          MaterializeModule,
		          AppRoutingModule
	          ],
	          providers   : [],
	          bootstrap   : [AppComponent]
          })
export class AppModule {
}
