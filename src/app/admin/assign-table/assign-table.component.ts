import { Component, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';
import { ActivatedRoute } from '@angular/router';
import { TableService } from 'src/app/core/table/table.service';
import { Table } from 'src/app/core/table/table';
import { Eatery } from 'src/app/core/eatery/eatery';

function convertB64StringToFile(data, type, fileName) {
  const byteCharacters = atob(data);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  const b = new Blob([byteArray], { type: type });
  FileSaver.saveAs(b, fileName);
}

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
      this.tableService.use(table.id).subscribe(res => {
        convertB64StringToFile(res['code'], res['type'], `invoice(${res['invoice_id']}).png`);
        this.getTables(eateryId);
      });
    } else {
      this.tableService.free(table.id).subscribe(_ => this.getTables(eateryId));
    }
  }

  ngOnInit(): void {
  }

}
