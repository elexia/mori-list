import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { WishlistPageComponent } from './components/wishlist-page/wishlist-page.component';
import { VillagersPageComponent } from './components/villagers-page/villagers-page.component';
import { LoginComponent } from './reusable-components/login/login.component';
import { SignupComponent } from './reusable-components/signup/signup.component';

// Services
import { NavigationService } from './services/navigation/navigation.service';
import { AuthenticationService } from './services/authentication/authentication.service';
import { DataService } from './services/data/data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    WishlistPageComponent,
    VillagersPageComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
  providers: [
    AuthenticationService,
    NavigationService,
    DataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
