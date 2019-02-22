import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PaginationData, Pagination } from '../models/pagination-data.model';
import { Transaction, TransactionRequest } from '../models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private baseUrl: string;

  constructor(private $http: HttpClient) {
    this.baseUrl = environment.apiUrl;
  }

  public getTransactions(
    pagination: Pagination,
    filter: string = null
  ): Observable<PaginationData<Transaction>> {
    let params = new HttpParams()
      .append('page', `${pagination.page}`)
      .append('limit', `${pagination.limit}`);

    Object.entries(pagination.order).forEach(([key, dir]) => {
      if (dir) {
        params = params.set('order', `${key}_${dir}`);
      }
    });

    if (filter) {
      params = params.append('filter', filter);
    }

    return this.$http
      .get(`${this.baseUrl}/transactions`, { params })
      .pipe(map(res => res as PaginationData<Transaction>));
  }

  public createTransaction(
    transaction: TransactionRequest
  ): Observable<Transaction> {
    return this.$http
      .post(`${this.baseUrl}/transactions`, { ...transaction })
      .pipe(map(res => res as Transaction));
  }
}
