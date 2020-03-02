// angular
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';


// material design
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBadgeModule } from '@angular/material/badge';

const MatModules = [
  MatSliderModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatInputModule,
  MatDividerModule,
  MatCardModule,
  MatGridListModule,
  MatDialogModule,
  MatSnackBarModule,
  MatBadgeModule,
]
// その他
import { TopComponent } from './top/top.component';
import { ProductsComponent } from './products/products.component';
import { CategorizedProductsComponent } from './products/categorized-products/categorized-products.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HistoryComponent } from './history/history.component';
import { CallComponent } from './call/call.component';
import { UsageComponent } from './usage/usage.component';
import { PaymentComponent } from './payment/payment.component';
import { PhotosComponent } from './photos/photos.component';
import { CategorizedPhotosComponent } from './photos/categorized-photos/categorized-photos.component';
import { OrderComponent } from './products/order/order.component';
import { CompleteOrderComponent } from './products/order/complete-order/complete-order.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    ProductsComponent,
    OrderComponent,
    CategorizedProductsComponent,
    CompleteOrderComponent,
    ToolbarComponent,
    HistoryComponent,
    CallComponent,
    UsageComponent,
    PaymentComponent,
    PhotosComponent,
    CategorizedPhotosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ...MatModules,
  ],
  entryComponents: [
    OrderComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
