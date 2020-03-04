import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignTableComponent } from './assign-table/assign-table.component';
import { ManageProductComponent } from './manage-product/manage-product.component';


const routes: Routes = [
  { path: '', component: AssignTableComponent },
  { path: 'product', component: ManageProductComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
