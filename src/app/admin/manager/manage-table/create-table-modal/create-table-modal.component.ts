import { Component, OnInit, Inject } from '@angular/core';
import { TableService } from '@app/core/table/table.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Eatery } from '@app/core/eatery/eatery';
import { EateryService } from '@app/core/eatery/eatery.service';

@Component({
  selector: 'app-create-table-modal',
  templateUrl: './create-table-modal.component.html',
  styleUrls: ['./create-table-modal.component.scss']
})
export class CreateTableModalComponent implements OnInit {
  tableForm: FormGroup = this.fb.group({
    number: [1, [Validators.min(0), Validators.required]],
    accomodation: [1, [Validators.min(0), Validators.required]],
    eatery: [null, Validators.required],
  });

  constructor(
    public dialogRef: MatDialogRef<CreateTableModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { eatery: Eatery },
    private tableService: TableService,
    private fb: FormBuilder
  ) {
    this.tableForm.patchValue({ eatery: data.eatery.id });
  }

  ngOnInit(): void {
  }

  create(): void {
    console.log(this.tableForm.value);
    if (this.tableForm.valid) {
      this.tableService.createTable(
        this.tableForm
      ).subscribe(res => this.dialogRef.close(res), error => console.log(error));
    }
  }
}
