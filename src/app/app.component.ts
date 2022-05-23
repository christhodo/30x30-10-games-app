import { Component } from '@angular/core';
import { shareReplay } from 'rxjs';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'games-app';
  links = [
    { path: '/login', icon: 'vpn_key', title: 'Login' },
    { path: '/games', icon: 'view_list', title: 'Games' },
    { path: '/home', icon: 'home', title: 'Home' },
  ];
  backend = [{ path: '/backend/child', icon: 'face', title: 'Backend' }];

  isAuthenticated$ = this.authService.isAuthenticated$.pipe(shareReplay(1));

  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
