import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private _router: Router) { }

  public onHomepage(): boolean {
    return this._router.url === '/';
  }

  public onWishlist(): boolean {
    return this._router.url === '/wishlist';
  }

  public onLogin(): boolean {
    return this._router.url === '/login';
  }

  public onSignup(): boolean {
    return this._router.url === '/signup';
  }

}
