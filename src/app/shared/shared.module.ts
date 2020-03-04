import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


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

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MatModules,
  ],
  exports: [
    ...MatModules,
  ]
})
export class SharedModule { }
