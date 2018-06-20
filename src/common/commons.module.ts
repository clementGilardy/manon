import { NgModule } from '@angular/core';
import { FooterComponent } from "common/components/footer/footer.component";
import { ProjectService } from "common/services/project.service";
import { RouterModule } from "@angular/router";

@NgModule({
	          exports     : [FooterComponent],
	          imports     : [RouterModule],
	          declarations: [
		          FooterComponent
	          ],
	          providers   : [ProjectService],
	          bootstrap   : []
          })
export class CommonsModule {
}