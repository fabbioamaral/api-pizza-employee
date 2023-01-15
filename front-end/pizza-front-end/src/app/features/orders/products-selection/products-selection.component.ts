import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTabChangeEvent } from '@angular/material/tabs';

export interface Tab {
  name: string;
  cards: string[];
}

@Component({
  selector: 'app-products-selection',
  templateUrl: './products-selection.component.html',
  styleUrls: ['./products-selection.component.scss']
})
export class ProductsSelectionComponent implements OnInit {
  tabs: Tab[] = [
    {
      name: 'Pizzas',
      cards: ['Pizza Small', 'Pizza Medium', 'Pizza Large']
    },
    {
      name: 'Pastas',
      cards: ['Pasta Small', 'Pasta Medium', 'Pasta Large']
    },
    {
      name: 'Beverages',
      cards: ['Coca-Cola', 'Water']
    },
    {
      name: 'Deserts',
      cards: ['Cake', 'Ice Cream']
    },
  ];

  tab: Tab | undefined;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  selectTab(tabSelected: MatTabChangeEvent) {
    this.tab = this.tabs.find(t => t.name === tabSelected.tab.textLabel);
  }

  selectDialogProductDetails(enterAnimationDuration: string, exitAnimationDuration: string, employee: Employee) {
      const dialog = this.dialog.open(DialogComponent, {
        data: {title: 'Delete Employee', text: 'Are you sure you want to delete this employee?'},
        width: '250px',
        enterAnimationDuration,
        exitAnimationDuration,
      });

      // dialog.afterClosed()
      // .pipe(takeUntil(this.destroyed$))
      // .subscribe((result) => {
      //   if (result === 'ok') {
      //     this.deleteEmployee(employee.id as number);
      //   }
      // });
  }

}
