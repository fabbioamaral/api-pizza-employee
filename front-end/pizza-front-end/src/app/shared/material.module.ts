import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

const materialModules = [
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule
];

@NgModule({
    declarations: [],
    imports: [...materialModules],
    exports: [...materialModules]
})

export class MaterialModule {}