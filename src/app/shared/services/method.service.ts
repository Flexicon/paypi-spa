import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Method } from '../models/method.model';

@Injectable({
  providedIn: 'root'
})
export class MethodService {
  private baseUrl: string;

  constructor(private $http: HttpClient) {
    this.baseUrl = environment.apiUrl;
  }

  public getMethods(): Observable<Method[]> {
    return this.$http
      .get(`${this.baseUrl}/methods`)
      .pipe(map(res => res as Method[]));
  }
}
