import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopComponent } from './top/top.component';


const routes: Routes = [
  { path: '', component: TopComponent, pathMatch: 'full' },
  {
    path: 'me-new/:eatId', children: [
      {
        path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
      },
      {
        path: ':invId', loadChildren: () => import('./eatery/eatery.module').then(m => m.EateryModule)
      }

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { paramsInheritanceStrategy: 'always' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
