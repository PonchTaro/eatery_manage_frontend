import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AssignTableComponent } from './assign-table/assign-table.component';
import { OrderListComponent } from './staff/order-list/order-list.component';
import { ManageProductComponent } from './manager/manage-product/manage-product.component';
import { CreateProductModalComponent } from './manager/manage-product/create-product-modal/create-product-modal.component';
import { EditProductModalComponent } from './manager/manage-product/edit-product-modal/edit-product-modal.component';
import { ManageTableComponent } from './manager/manage-table/manage-table.component';
import { CreateTableModalComponent } from './manager/manage-table/create-table-modal/create-table-modal.component';
import { EditTableModalComponent } from './manager/manage-table/edit-table-modal/edit-table-modal.component';
import { ManageEateryComponent } from './manager/manage-eatery/manage-eatery.component';
import { EditEateryModalComponent } from './manager/manage-eatery/edit-eatery-modal/edit-eatery-modal.component';


@NgModule({
  declarations: [
    AssignTableComponent,
    ManageProductComponent,
    CreateProductModalComponent,
    EditProductModalComponent,
    ManageTableComponent,
    CreateTableModalComponent,
    EditTableModalComponent,
    ManageEateryComponent,
    EditEateryModalComponent,
    OrderListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
  ],
  entryComponents: [
    CreateProductModalComponent,
    EditProductModalComponent,
    CreateTableModalComponent,
    EditTableModalComponent,
    EditEateryModalComponent,
  ]
})
export class AdminModule { }
