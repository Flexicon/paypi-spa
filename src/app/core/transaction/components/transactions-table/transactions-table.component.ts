import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from '@angular/core';
import { Transaction } from 'src/app/shared/models/transaction.model';
import {
  Pagination,
  RequestFilters
} from 'src/app/shared/models/pagination-data.model';
import { TransactionStatus } from 'src/app/shared/enums/transaction-status.enum';
import { SortDirection } from 'src/app/shared/enums/SortDirection.enum';

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionsTableComponent {
  @Input() transactions: Transaction[];
  @Input() page: number;
  @Input() limit: number;
  @Input() total: number;
  @Input() loading: boolean;
  @Output() refetchData = new EventEmitter<RequestFilters>();
  sortValue = null;
  sortKey = null;
  filterStatus = [
    { text: 'Success', value: TransactionStatus.SUCCESS },
    { text: 'Failed', value: TransactionStatus.FAILED },
    { text: 'Error', value: TransactionStatus.ERROR },
    { text: 'Cancelled', value: TransactionStatus.CANCELLED }
  ];
  scrollSettings = { x: '700px', y: '50vh' };
  currentFilter: string;

  constructor() {}

  sort(sortBy: { key: string; value: string }): void {
    this.sortKey = sortBy.key;
    if (sortBy.value) {
      this.sortValue =
        sortBy.value === 'ascend'
          ? SortDirection.ASCEND
          : SortDirection.DESCEND;
    } else {
      this.sortValue = null;
    }

    this.fetchTableData(true);
  }

  updateFilter(value: string): void {
    this.currentFilter = value;
    this.fetchTableData(true);
  }

  openDetails(id: number) {
    console.log(id);
  }

  fetchTableData(reset: boolean = false): void {
    if (reset) {
      this.page = 1;
    }
    this.refetchData.emit({
      pagination: {
        page: this.page,
        limit: this.limit,
        order: {
          [this.sortKey]: this.sortValue
        }
      },
      filter: this.currentFilter
    });
  }
}
