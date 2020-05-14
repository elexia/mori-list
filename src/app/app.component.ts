import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from "@angular/material/dialog";

import { AuthenticationService } from './services/authentication/authentication.service';
import { NavigationService } from './services/navigation/navigation.service';

import { LoginComponent } from './reusable-components/login/login.component';
import { SignupComponent } from './reusable-components/signup/signup.component';
import { SimpleFade } from './animations/fades';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ SimpleFade ]
})
export class AppComponent {
  public title = 'mori-list';

  constructor(
    private authenticationService: AuthenticationService,
    public navigationService: NavigationService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  public onLogout(): void {
    this.authenticationService.logout();
  }

  public onHomepage(): boolean {
    return this.navigationService.onHomepage();
  }

  public onWishlist(): boolean {
    return this.navigationService.onWishlist();
  }

  public onLogin() {
    this.dialog.open(LoginComponent, {width: '500px'})
      .afterClosed().subscribe(() => {
        // Do something
      });
  }

  public onSignup() {
    this.dialog.open(SignupComponent, {width: '500px'})
      .afterClosed().subscribe(() => {
        // Do something
      });
  }
}
