import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  displayedColumns = ['quantity', 'item', 'price', 'action'];
  dataSource: any;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = [
      {
        quantity: 1,
        item: 'Pizza Large Calabresa',
        price: '85.90'
      },
      {
        quantity: 1,
        item: 'Pizza Medium Chicken',
        price: '75.50'
      },
      {
        quantity: 1,
        item: 'Pizza Small Chicken',
        price: '35.50'
      }
    ];
  }

}
