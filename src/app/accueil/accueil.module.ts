import { NgModule } from '@angular/core';
import { HomeComponent } from "app/accueil/home/home.component";
import { ProjectComponent } from "app/accueil/project/project.component";
import { HeaderTitleComponent } from "app/accueil/headerTitle/headerTitle.component";
import { ContactComponent } from "app/accueil/contact/contact.component";
import { CompetenceComponent } from "app/accueil/competence/competence.component";
import { AproposComponent } from "app/accueil/apropos/apropos.component";
import { CommonsModule } from "common/commons.module";
import { ContactMobileComponent } from "app/accueil/contact-mobile/contactMobile.component";
import { NavaccueilComponent } from "app/accueil/nav-accueil/navaccueil.component";
import { MailService } from "common/services/mail.service";
import { CommonModule } from "@angular/common";
import { AccueilRoutingModule } from "app/accueil/accueil.routing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
	          imports     : [
		          CommonsModule,
		          CommonModule,
		          FormsModule,
		          ReactiveFormsModule,
		          HttpClientModule,
		          AccueilRoutingModule
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
	          providers   : [MailService]
          })
export class AccueilModule {
}