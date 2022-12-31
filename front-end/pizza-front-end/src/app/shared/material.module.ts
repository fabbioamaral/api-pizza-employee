import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const materialModules = [
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule
];

@NgModule({
    declarations: [],
    imports: [...materialModules],
    exports: [...materialModules]
})

export class MaterialModule {}