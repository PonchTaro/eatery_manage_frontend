import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderListComponent } from './staff/order-list/order-list.component';
import { ManageProductComponent } from './manager/manage-product/manage-product.component';
import { AssignTableComponent } from './assign-table/assign-table.component';
import { ManageTableComponent } from './manager/manage-table/manage-table.component';
import { ManageEateryComponent } from './manager/manage-eatery/manage-eatery.component';


const routes: Routes = [
  { path: 'table', component: AssignTableComponent },
  {
    path: 'manager', children: [
      { path: 'product', component: ManageProductComponent },
      { path: 'table', component: ManageTableComponent },
      { path: 'eatery', component: ManageEateryComponent },
      { path: '', redirectTo: 'product', pathMatch: 'full' },
    ]
  },
  {
    path: 'staff', children: [
      { path: 'orders', component: OrderListComponent, pathMatch: 'full' },
      { path: '', redirectTo: '', pathMatch: 'full' },
    ]
  },
  { path: '', redirectTo: 'staff', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
