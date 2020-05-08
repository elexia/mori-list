import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
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
    let name = "Lexi";
    let username = "lexi";
    let email = "elexiapierre@gmail.com";
    let password = "PunchBunny0";
    let user = {
      accountType: 1,
      name: name,
      username: username,
      email: email,
      password: password,
    } as User;

    this.authenticationService.signup(user).subscribe(() => {
      console.log("Signed up!");
      this.authenticationService.login(user).subscribe(() => {
        console.log("Logged in!");
      });
    });
  }
}
