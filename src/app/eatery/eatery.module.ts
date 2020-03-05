import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EateryRoutingModule } from './eatery-routing.module';
import { ProductsComponent } from './products/products.component';
import { CategorizedProductsComponent } from './products/categorized-products/categorized-products.component';
import { HistoryComponent } from './history/history.component';
import { CallComponent } from './call/call.component';
import { UsageComponent } from './usage/usage.component';
import { PaymentComponent } from './payment/payment.component';
import { PhotosComponent } from './photos/photos.component';
import { CategorizedPhotosComponent } from './photos/categorized-photos/categorized-photos.component';
import { OrderComponent } from './products/order/order.component';
import { SharedModule } from '../shared/shared.module';
import { CompleteOrderComponent } from './products/complete-order/complete-order.component';
import { IssueVoucherComponent } from './issue-voucher/issue-voucher.component';
import { EateryTopComponent } from './eatery-top/eatery-top.component';

@NgModule({
  declarations: [
    ProductsComponent,
    OrderComponent,
    CategorizedProductsComponent,
    CompleteOrderComponent,
    HistoryComponent,
    CallComponent,
    UsageComponent,
    PaymentComponent,
    PhotosComponent,
    CategorizedPhotosComponent,
    IssueVoucherComponent,
    EateryTopComponent,
  ],
  entryComponents: [
    OrderComponent,
  ],
  imports: [
    CommonModule,
    EateryRoutingModule,
    SharedModule,
  ]
})
export class EateryModule { }
