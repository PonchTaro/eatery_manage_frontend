import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TableService } from 'src/app/core/table/table.service';
import { Table } from 'src/app/core/table/table';
import { Eatery } from 'src/app/core/eatery/eatery';


@Component({
  selector: 'app-assign-table',
  templateUrl: './assign-table.component.html',
  styleUrls: ['./assign-table.component.scss']
})
export class AssignTableComponent implements OnInit {
  tables: Table[];

  constructor(
    private route: ActivatedRoute,
    private tableService: TableService,
  ) {
    this.route.params.subscribe(params => {
      this.getTables(params['eatId']);
    });
  }

  getTables(eateryId: number): void {
    this.tableService.getTables(eateryId).subscribe(
      tables => this.tables = tables
    );
  }

  tableSelected(table: Table): void {
    const eateryId = table.eatery instanceof Eatery ? table.eatery.id : table.eatery as number;
    if (table.is_available) {
      this.tableService.occupy(table.id).subscribe(res => this.getTables(eateryId));
    } else {
      this.tableService.free(table.id).subscribe(_ => this.getTables(eateryId));
    }
  }

  ngOnInit(): void {
  }

}
