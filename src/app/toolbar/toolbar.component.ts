import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EateryService } from '../core/eatery/eatery.service';
import { Eatery } from '../core/eatery/eatery';

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
