import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

export enum TYPE_SNACK {
  success = 'green-snackbar',
  error = 'red-snackbar'
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private snackBar: MatSnackBar) { }

  displaySnackBar(text: string, typeOfSnack: TYPE_SNACK) {
    this.snackBar.open(text, undefined, {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 3000,
      panelClass: [typeOfSnack]
    })
  }
}
