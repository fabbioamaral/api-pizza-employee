import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-order-selection-details',
  templateUrl: './dialog-order-selection-details.component.html',
  styleUrls: ['./dialog-order-selection-details.component.scss']
})

export interface OrderSelectionDetailSection {
  title: string;
  rule?: string;
}

export class DialogOrderSelectionDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
