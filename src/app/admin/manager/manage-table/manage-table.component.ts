import { Component, OnInit } from '@angular/core';
import { Table } from '@app/core/table/table';
import { ActivatedRoute } from '@angular/router';
import { TableService } from '@app/core/table/table.service';
import * as FileSaver from 'file-saver';
import { Eatery } from '@app/core/eatery/eatery';
import { MatDialog } from '@angular/material/dialog';
import { CreateTableModalComponent } from './create-table-modal/create-table-modal.component';
import { EateryService } from '@app/core/eatery/eatery.service';
import { EditTableModalComponent } from './edit-table-modal/edit-table-modal.component';


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
  eatery: Eatery;
  checked = false;

  constructor(
    private route: ActivatedRoute,
    private tableService: TableService,
    public dialog: MatDialog,
    eateryService: EateryService,
  ) {
    eateryService.eatery$.subscribe(
      e => {
        this.eatery = e;
        this.getTables(e);
      });
  }

  getTables(eatery: Eatery): void {
    this.tableService.getTables(eatery.id).subscribe(
      tables => this.tables = tables
    );
  }


  getCode(table: Table): void {
    // QRコードを発行して保存
    this.tableService.issueQRcode(table.id).subscribe(res => {
      convertB64StringToFile(res['code'], res['type'], `table(${res['number']}).png`);
      this.getTables(table.eatery);
    });
  }

  tableSelected(table: Table): void {
    if (!this.checked) {
      this.getCode(table);
    } else {
      this.edit(table);
    }
  }
  ngOnInit(): void {
  }

  edit(table: Table): void {
    const dialogRef = this.dialog.open(EditTableModalComponent, {
      width: '80%',
      data: { eatery: this.eatery, table: table }
    });
    // ダイアログが閉じた後の動き
    dialogRef.afterClosed().subscribe(_ => {
      this.getTables(this.eatery);
    });
  }

  create(): void {
    const dialogRef = this.dialog.open(CreateTableModalComponent, {
      width: '80%',
      data: { eatery: this.eatery }
    });
    // ダイアログが閉じた後の動き
    dialogRef.afterClosed().subscribe(_ => {
      this.getTables(this.eatery);
    });
  }
}
