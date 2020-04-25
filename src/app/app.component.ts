import { Component } from '@angular/core';
import { NavigationService } from './services/navigation/navigation.service';
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
    public navigationService: NavigationService
  ) { }

  ngOnInit(): void {
  }

  public onHomepage(): boolean {
    return this.navigationService.onHomepage();
  }

  public onWishlist(): boolean {
    return this.navigationService.onWishlist();
  }

  public onLogin(): boolean {
    return this.navigationService.onLogin();
  }

  public onSignup(): boolean {
    return this.navigationService.onSignup();
  }
}
