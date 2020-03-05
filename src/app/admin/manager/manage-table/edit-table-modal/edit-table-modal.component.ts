import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { TableService } from '@app/core/table/table.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Eatery } from '@app/core/eatery/eatery';
import { Table } from '@app/core/table/table';

@Component({
  selector: 'app-edit-table-modal',
  templateUrl: './edit-table-modal.component.html',
  styleUrls: ['./edit-table-modal.component.scss']
})
export class EditTableModalComponent implements OnInit {
  tableForm: FormGroup = this.fb.group({
    number: [1, [Validators.min(0), Validators.required]],
    accomodation: [1, [Validators.min(0), Validators.required]],
    eatery: [null, Validators.required],
  });

  constructor(public dialogRef: MatDialogRef<EditTableModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { eatery: Eatery, table: Table },
    private tableService: TableService,
    private fb: FormBuilder
  ) {
    this.tableForm.patchValue({
      number: data.table.number,
      accomodation: data.table.accomodation,
      eatery: data.eatery.id
    });
  }

  ngOnInit(): void {
  }

  edit(table: Table): void {
    if (this.tableForm.valid) {
      this.tableService.editTable(table.id, this.tableForm).subscribe(res => {
        this.dialogRef.close(res)
      })
    }
  }
}
