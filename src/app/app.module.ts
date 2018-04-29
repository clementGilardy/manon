import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RoutingModule } from "app/app.routing";
import { AccueilComponent } from "app/accueil/accueil.component";
import { HeaderComponent } from "app/header/header.component";
import { MaterializeModule } from "angular2-materialize";
import { FooterComponent } from "app/footer/footer.component";
import { CompetenceComponent } from "app/competence/competence.component";
import { AproposComponent } from "app/apropos/apropos.component";
import { ProjectComponent } from "app/project/project.component";
import { ContactComponent } from "app/contact/contact.component";
import { HeaderTitleComponent } from "app/headerTitle/headerTitle.component";

@NgModule({
	          declarations: [
		          AppComponent,
		          AccueilComponent,
		          HeaderComponent,
		          FooterComponent,
		          CompetenceComponent,
		          AproposComponent,
		          ProjectComponent,
		          ContactComponent,
		          HeaderTitleComponent
	          ],
	          imports     : [
		          BrowserModule,
		          RoutingModule,
		          MaterializeModule
	          ],
	          providers   : [],
	          bootstrap   : [AppComponent]
          })
export class AppModule {
}
