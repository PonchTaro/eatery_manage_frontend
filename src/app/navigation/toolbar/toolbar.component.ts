import { Component, OnInit, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Eatery } from '@app/core/eatery/eatery';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() drawer: MatDrawer;
  @Input() eatery: Eatery;

  constructor() { }

  ngOnInit(): void {
  }

}
