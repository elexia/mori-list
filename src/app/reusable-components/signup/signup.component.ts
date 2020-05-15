import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public name = new FormControl();
  public username = new FormControl();
  public email = new FormControl("", Validators.email);
  public password = new FormControl();

  constructor(
    private authenticationService: AuthenticationService,
    private matSnackBar: MatSnackBar,
    private dialogRef: MatDialogRef<SignupComponent>
  ) { }

  ngOnInit(): void {
  }

  public signup() {
    this._signup();
  }

  public login() {
    // open login close signup
  }

  private _signup() {
    let user = {
      accountType: 1,
      name: this.name.value,
      username: this.username.value,
      email: this.email.value,
      password: this.password.value,
    } as User;

    this.authenticationService.signup(user).subscribe(() => {
      this.authenticationService.login(user).subscribe(() => {
        this.matSnackBar.open("Your account has been made!", "", { duration: 3000 });
        this.dialogRef.close();
      },
      (err) => {
        this.matSnackBar.open("Uh oh. An error occurred while trying to log in. Please try again.", "", { duration: 3000 });
      });
    }, (err) => {
      this.matSnackBar.open("Uh oh. An error occurred while trying to sign up. Please try again.", "", { duration: 3000 });
    });
  }
}
