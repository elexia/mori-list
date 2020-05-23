import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private token: string;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  public getVillagers(): Observable<any> {
    return this.http.get(`/api/villagers`, { headers: { Authorization: `Bearer ${this.getToken()}` } });
  }

  public getVillager(name): Observable<any> {
    return this.http.get(`/api/villager/${name}`, { headers: { Authorization: `Bearer ${this.getToken()}`} });
  }

  private getToken(): string {
    if (!this.token) this.token = localStorage.getItem('mean-token');
    return this.token;
  }

}
