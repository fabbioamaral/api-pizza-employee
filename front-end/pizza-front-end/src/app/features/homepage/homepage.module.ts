import { NgModule } from "@angular/core";
import { MaterialModule } from "src/app/shared/material.module";
import { HomepageComponent } from "./homepage.component";
import { HomepageRoutingModule } from "./homepage.routing.module";


@NgModule({
    declarations: [ HomepageComponent ],
    imports: [
        HomepageRoutingModule,
        MaterialModule
    ],
    exports: []
})

export class HomepageModule {}