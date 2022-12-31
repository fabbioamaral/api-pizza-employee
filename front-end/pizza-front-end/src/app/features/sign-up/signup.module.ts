import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/shared/material.module";
import { SignUpComponent } from "./sign-up.component";
import { SignupRoutingModule } from "./signup.routing.module";


@NgModule({
    declarations: [ SignUpComponent ],
    imports: [
        MaterialModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        SignupRoutingModule
    ],
    exports: []
})

export class SignupModule {}