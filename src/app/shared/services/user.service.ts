import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl: string;

  constructor(private $http: HttpClient) {
    this.baseUrl = environment.apiUrl;
  }

  public getUser(id: number): Observable<User> {
    return this.$http
      .get(`${this.baseUrl}/users/${id}`)
      .pipe(map(res => res as User));
  }
}
