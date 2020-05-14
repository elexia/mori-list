import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
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
    private router: Router,
  ) { }

  public signup(user: User): Observable<any> {
    user.email = user.email.toLowerCase();
    return this.request('post', 'signup', user);
  }

  public login(user: User): Observable<any> {
    return this.request('post', 'login', user);
  }

  public logout(): void {
    this.token = '';
    this.userRole = '';
    window.localStorage.removeItem('mean-token');
    window.localStorage.removeItem('mean-user-role');
    this.router.navigate(['/']);
  }

  public getUser(): User {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUser();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
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
