import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from "app/accueil/home/home.component";
import { ProjectComponent } from "app/accueil/project/project.component";
import { HeaderTitleComponent } from "app/accueil/headerTitle/headerTitle.component";
import { ContactComponent } from "app/accueil/contact/contact.component";
import { CompetenceComponent } from "app/accueil/competence/competence.component";
import { AproposComponent } from "app/accueil/apropos/apropos.component";
import { CommonsModule } from "common/commons.module";
import { ContactMobileComponent } from "app/accueil/contact-mobile/contactMobile.component";
import { FormsModule } from "@angular/forms";
import { NavaccueilComponent } from "app/accueil/nav-accueil/navaccueil.component";

@NgModule({
	          imports     : [
		          BrowserModule,
		          CommonsModule,
		          FormsModule
	          ],
	          declarations: [
		          HomeComponent,
		          ProjectComponent,
		          HeaderTitleComponent,
		          ContactComponent,
		          CompetenceComponent,
		          AproposComponent,
		          ContactMobileComponent,
		          NavaccueilComponent
	          ],
	          bootstrap   : []
          })
export class AccueilModule {
}