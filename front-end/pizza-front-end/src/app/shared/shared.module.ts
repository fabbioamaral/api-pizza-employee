import { NgModule } from "@angular/core";
import { BaseComponent } from "./base/base.component";
import { DialogComponent } from "./dialog/dialog.component";
import { HeaderComponent } from "./header/header.component";
import { MaterialModule } from "./material.module";

const SHARED_COMPONENTS = [
  BaseComponent,
  HeaderComponent,
  DialogComponent
];
@NgModule({
  declarations: [...SHARED_COMPONENTS],
  exports: [...SHARED_COMPONENTS],
  imports: [
    MaterialModule
  ],
})
export class SharedModule {}
