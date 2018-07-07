import { NgModule } from '@angular/core';
import { FooterComponent } from "common/components/footer/footer.component";
import { ProjectService } from "common/services/project.service";
import { RouterModule } from "@angular/router";
import { NavigationComponent } from "common/components/navigation/navigation.component";
import { CommonModule } from "@angular/common";

@NgModule({
	          exports     : [FooterComponent, NavigationComponent],
	          imports     : [RouterModule, CommonModule],
	          declarations: [
		          FooterComponent,
		          NavigationComponent
	          ],
	          providers   : [ProjectService],
	          bootstrap   : []
          })
export class CommonsModule {
}