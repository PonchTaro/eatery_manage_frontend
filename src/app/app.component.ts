import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { EateryService, Eatery } from './core/services/eatery.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private eateryService: EateryService,
  ) {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe(params => {
      if ('id' in params) {
        this.eateryService.getEeatery(params['id']).subscribe();
      }
    });
  }
}
