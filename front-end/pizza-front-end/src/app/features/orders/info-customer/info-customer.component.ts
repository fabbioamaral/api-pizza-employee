import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-customer',
  templateUrl: './info-customer.component.html',
  styleUrls: ['./info-customer.component.scss']
})
export class InfoCustomerComponent implements OnInit {
  @Input() clientName = '';
  @Input() noteClient = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
