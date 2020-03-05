import { Component } from '@angular/core';
import { EateryService } from '@app/core/eatery/eatery.service';
import { Eatery } from '@app/core/eatery/eatery';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styles: ['']
})
export class TopComponent {
  eateries: Eatery[];

  constructor(
    private eateryService: EateryService
  ) {
    eateryService.getEeateries().subscribe(
      e => this.eateries = e
    );
  }
}
