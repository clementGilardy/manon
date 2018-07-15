import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentionsComponent } from './mentions/mentions.component';
import { MentionsLegalRouting } from "app/mentions-legal/mentions-legal.routing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonsModule } from "common/commons.module";
import { HttpClientModule } from "@angular/common/http";
import { AuthGuard } from "app/admin/AuthGuard";
import { LocalStorageService } from "common/services/localStorage.service";

@NgModule({
	          imports     : [
		          CommonsModule,
		          CommonModule,
		          FormsModule,
		          ReactiveFormsModule,
		          HttpClientModule,
		          MentionsLegalRouting
	          ],
	          declarations: [MentionsComponent],
	          providers   : [AuthGuard, LocalStorageService]
          })
export class MentionsLegalModule {
}
