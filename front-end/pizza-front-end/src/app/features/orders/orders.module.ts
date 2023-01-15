import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { InfoCustomerComponent } from './info-customer/info-customer.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { ProductsSelectionComponent } from './products-selection/products-selection.component';
import { OrderPaymentComponent } from './order-payment/order-payment.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrdersComponent } from './orders.component';
import { DialogOrderSelectionDetailsComponent } from './dialog-order-selection-details/dialog-order-selection-details.component';


@NgModule({
  declarations: [
    OrdersComponent,
    InfoCustomerComponent,
    OrderDetailsComponent,
    ProductsSelectionComponent,
    OrderPaymentComponent,
    DialogOrderSelectionDetailsComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class OrdersModule { }
