import { Component, OnInit, OnDestroy } from '@angular/core';
import { TransactionService } from 'src/app/shared/services/transaction.service';
import { Subject } from 'rxjs';
import {
  Pagination,
  RequestFilters
} from 'src/app/shared/models/pagination-data.model';
import { Transaction } from 'src/app/shared/models/transaction.model';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit, OnDestroy {
  // State
  transactions: Transaction[];
  pagination: Pagination;
  loading: boolean;
  // Subscriptions
  requestFiltersSubject$ = new Subject<RequestFilters>();
  destroy$ = new Subject();

  constructor(private transactionService: TransactionService) {}

  ngOnInit() {
    this.setupInitialData();
    this.prepareDebounceOnRefetch();
    this.fetchData();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onRefetchData(filters: RequestFilters): void {
    this.requestFiltersSubject$.next(filters);
  }

  private setupInitialData() {
    this.transactions = [];
    this.pagination = {
      page: 1,
      limit: 10,
      order: {
        id: 'ASC'
      }
    };
  }

  private fetchData(filters: RequestFilters = null): void {
    const paginationParams = filters ? filters.pagination : this.pagination;
    const filter = filters ? filters.filter : null;

    this.loading = true;
    this.transactionService
      .getTransactions(paginationParams, filter)
      .subscribe(({ pagination, data }) => {
        this.pagination = pagination;
        this.transactions = data;
        this.loading = false;
      });
  }

  private prepareDebounceOnRefetch(): void {
    this.requestFiltersSubject$
      .pipe(
        debounceTime(50),
        takeUntil(this.destroy$)
      )
      .subscribe(filters => this.fetchData(filters));
  }
}
