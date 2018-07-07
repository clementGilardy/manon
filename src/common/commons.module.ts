import { NgModule } from '@angular/core';
import { FooterComponent } from "common/components/footer/footer.component";
import { ProjectService } from "common/services/project.service";
import { RouterModule } from "@angular/router";
import { NavigationComponent } from "common/components/navigation/navigation.component";

@NgModule({
	          exports     : [FooterComponent, NavigationComponent],
	          imports     : [RouterModule],
	          declarations: [
		          FooterComponent,
		          NavigationComponent
	          ],
	          providers   : [ProjectService],
	          bootstrap   : []
          })
export class CommonsModule {
}