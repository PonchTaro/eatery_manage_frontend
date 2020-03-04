import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HistoryComponent } from './history/history.component';
import { PaymentComponent } from './payment/payment.component';
import { UsageComponent } from './usage/usage.component';
import { CallComponent } from './call/call.component';
import { PhotosComponent } from './photos/photos.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'usage', component: UsageComponent },
  { path: 'call', component: CallComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EateryRoutingModule { }
