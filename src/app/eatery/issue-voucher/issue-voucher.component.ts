import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TableService } from '@app/core/table/table.service';
import { Voucher } from '@app/core/voucher/voucher';

@Component({
  selector: 'app-issue-voucher',
  templateUrl: './issue-voucher.component.html',
  styleUrls: ['./issue-voucher.component.scss']
})
export class IssueVoucherComponent {
  voucher: Voucher;

  constructor(
    route: ActivatedRoute,
    router: Router,
    private tableService: TableService
  ) {
    route.params.subscribe(params => {
      this.tableService.occupy(params['tableId']).subscribe(
        res => {
          router.navigate(['me-new', params['eatId'], res['voucher_id']]);
        });
    })
  }
}
