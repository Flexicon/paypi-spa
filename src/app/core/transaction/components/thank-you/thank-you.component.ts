import { Component, Input, OnChanges } from '@angular/core';
import { Transaction } from 'src/app/shared/models/transaction.model';

import { statusIcons } from '../status-icon/status-icon.component';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnChanges {
  readonly statusIcons = statusIcons;
  @Input() transaction: Transaction;

  ngOnChanges() {
    console.log(this.transaction);
  }
}
