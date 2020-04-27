import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './components/home-page/home-page.component';
import { WishlistPageComponent } from'./components/wishlist-page/wishlist-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'wishlist', component: WishlistPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
