import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email = new FormControl("", Validators.email);
  public password = new FormControl();

  constructor(
    private authenticationService: AuthenticationService,
    private matSnackBar: MatSnackBar,
    private dialogRef: MatDialogRef<LoginComponent>
  ) { }

  ngOnInit(): void {
  }

  public signup() {
    // open signup, close login
  }

  public login() {
    let user = {
      email: this.email.value,
      password: this.password.value
    } as User;
    this.authenticationService.login(user).subscribe(() => {
      this.matSnackBar.open("Logged in!", "", { duration: 3000 });
      this.dialogRef.close();
    }, (err) => {
      this.matSnackBar.open("Uh oh. An error occurred while trying to log you in. Please try again.", "", { duration: 3000 });
    });
  }

}
