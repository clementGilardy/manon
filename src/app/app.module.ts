import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from "app/app.routing";
import { FormsModule } from "@angular/forms";
import { PageNotFoundComponent } from "common/components/pageNotFound/pageNotFound.component";
import { MaterializeModule } from "angular2-materialize";
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";
import { NavigationComponent } from '../common/components/navigation/navigation.component';

@NgModule({
	          declarations: [
		          AppComponent,
		          PageNotFoundComponent
	          ],
	          imports     : [
		          BrowserModule,
		          CommonModule,
		          BrowserAnimationsModule,
		          FormsModule,
		          MaterializeModule,
		          AppRoutingModule,
		          ToastrModule.forRoot({
			                               timeOut          : 5000,
			                               preventDuplicates: true,
			                               autoDismiss      : true
		                               })
	          ],
	          providers   : [],
	          bootstrap   : [AppComponent]
          })
export class AppModule {
}
