import { Component, OnInit } from '@angular/core';
import { Table } from '@app/core/table/table';
import { ActivatedRoute } from '@angular/router';
import { TableService } from '@app/core/table/table.service';
import * as FileSaver from 'file-saver';
import { Eatery } from '@app/core/eatery/eatery';


function convertB64StringToFile(data: string, type: string, fileName: string) {
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
  selector: 'app-manage-table',
  templateUrl: './manage-table.component.html',
  styleUrls: ['./manage-table.component.scss']
})
export class ManageTableComponent implements OnInit {
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
    // QRコードを発行して保存
    this.tableService.issueQRcode(table.id).subscribe(res => {
      convertB64StringToFile(res['code'], res['type'], `table(${res['number']}).png`);
      this.getTables(eateryId);
    });
  }

  ngOnInit(): void {
  }
}
