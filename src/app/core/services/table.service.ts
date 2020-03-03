import { Injectable } from '@angular/core';
import { Eatery } from './eatery.service';

export class Table {
  eatery: Eatery;
  accomodation: number;
  number: string;
}

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor() { }
}
