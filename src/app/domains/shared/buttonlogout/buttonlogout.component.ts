import { Component, inject } from '@angular/core';
import { AuthService } from '@services/auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-buttonlogout',
  standalone: true,
  imports: [],
  templateUrl: './buttonlogout.component.html',
  styleUrl: './buttonlogout.component.css'
})
export class ButtonlogoutComponent {

  private authService = inject(AuthService);
  private router = inject(Router);

  logout() {
    this.authService.logout();
    this.navToRoot();
  }

  navToRoot() {
    this.router.navigate(['/'])
  }

}
