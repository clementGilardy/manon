import { NgModule } from '@angular/core';
import { FooterComponent } from "common/components/footer/footer.component";
import { NavComponent } from "common/components/nav/nav.component";
import { ProjectService } from "common/services/project.service";
import { RouterModule } from "@angular/router";

@NgModule({
	          exports     : [FooterComponent, NavComponent],
	          imports     : [RouterModule],
	          declarations: [
		          FooterComponent,
		          NavComponent
	          ],
	          providers   : [ProjectService],
	          bootstrap   : []
          })
export class CommonsModule {
}