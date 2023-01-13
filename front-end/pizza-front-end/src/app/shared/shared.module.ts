import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { MaterialModule } from "./material.module";

@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    MaterialModule
  ],
})
export class SharedModule {}
