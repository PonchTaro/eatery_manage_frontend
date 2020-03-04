import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopComponent } from './top/top.component';


const routes: Routes = [
  { path: '', component: TopComponent, pathMatch: 'full' },
  {
    path: 'eatery/:id', children: [
      {
        path: 'admin', children: [

        ]
      },
      {
        path: '', loadChildren: () => import('./eatery/eatery.module').then(m => m.EateryModule)
      }

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
