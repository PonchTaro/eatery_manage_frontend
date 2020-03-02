import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EateryService } from '../core/services/eatery.service';

@Component({
  selector: 'app-top',
  template: '',
  styles: ['']
})
export class TopComponent {

  constructor() {
    // なんらかのストレージからどの飲食店にアクセス中かを取得
    // なければNotFound      
  }
}
