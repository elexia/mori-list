import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './components/home-page/home-page.component';
import { WishlistPageComponent } from'./components/wishlist-page/wishlist-page.component';
import { VillagersPageComponent } from'./components/villagers-page/villagers-page.component';
import { VillagerPageComponent } from'./components/villager-page/villager-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'wishlist', component: WishlistPageComponent },
  { path: 'villagers', component: VillagersPageComponent },
  { path: 'villager', component: VillagerPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
