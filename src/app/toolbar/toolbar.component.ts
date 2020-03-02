import { Component, OnInit } from '@angular/core';
import { EateryService, Eatery } from '../core/services/eatery.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  eatery$: Observable<Eatery>;

  constructor(
    eateryService: EateryService
  ) {
    this.eatery$ = eateryService.eatery$;
  }

  ngOnInit(): void {
  }

}
