import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../models/user';

interface TokenResponse {
  token: string;
  accountType: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private token: string;
  private userRole: string | undefined;

  constructor(
    private http: HttpClient,
  ) { }

  public signup(user: User): Observable<any> {
    return this.request('post', 'signup', user);
  }

  public login(user: User): Observable<any> {
    return this.request('post', 'login', user);
  }

  private getToken(): string {
    if (!this.token) this.token = localStorage.getItem('mean-token');
    return this.token;
  }

  private request(method: 'post' | 'get', type: 'signup' | 'login', user?: User): Observable<any> {
    let base;
    if (method === 'post') {
      base = this.http.post(`/api/${type}`, user, { headers: { Authorization: `Bearer ${this.getToken()}` } });
    } else {
      base = this.http.get(`/api/${type}`, { headers: { Authorization: `Bearer ${this.getToken()}` } });
    }
    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token && data.accountType) this.saveLocalStorage(data.token, data.accountType);
        return data;
      })
    );
    return request;
  }

  private saveLocalStorage(token: string, accountType: string): void {
    localStorage.setItem('mean-token', token);
    localStorage.setItem('mean-user-role', accountType);
    this.token = token;
    this.userRole = accountType;
  }

}
