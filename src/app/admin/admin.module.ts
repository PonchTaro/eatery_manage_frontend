import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AssignTableComponent } from './assign-table/assign-table.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { CreateProductModalComponent } from './manage-product/create-product-modal/create-product-modal.component';


@NgModule({
  declarations: [
    AssignTableComponent,
    ManageProductComponent,
    CreateProductModalComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
  ],
  entryComponents: [
    CreateProductModalComponent,
  ]
})
export class AdminModule { }
