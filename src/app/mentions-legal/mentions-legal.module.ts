import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentionsComponent } from './mentions/mentions.component';
import { MentionsLegalRouting } from "app/mentions-legal/mentions-legal.routing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonsModule } from "common/commons.module";
import { HttpClientModule } from "@angular/common/http";
import { NavMentionComponent } from './nav-mention/nav-mention.component';

@NgModule({
	          imports     : [
		          CommonsModule,
		          CommonModule,
		          FormsModule,
		          ReactiveFormsModule,
		          HttpClientModule,
		          MentionsLegalRouting
	          ],
	          declarations: [MentionsComponent, NavMentionComponent]
          })
export class MentionsLegalModule {
}
