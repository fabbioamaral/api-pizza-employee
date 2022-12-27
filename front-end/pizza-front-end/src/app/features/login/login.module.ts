import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/shared/material.module";
import { LoginComponent } from "./login.component";
import { LoginRoutingModule } from "./login.routing.module";


@NgModule({
    declarations: [ LoginComponent ],
    imports: [
        MaterialModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        LoginRoutingModule
    ],
    exports: []
})

export class LoginModule {}