import { Component, inject } from '@angular/core';

import { AuthService } from '@services/auth.service'
@Component({
  selector: 'app-buttonlogout',
  standalone: true,
  imports: [],
  templateUrl: './buttonlogout.component.html',
  styleUrl: './buttonlogout.component.css'
})
export class ButtonlogoutComponent {

  private authService = inject(AuthService);

  logout() {
    this.authService.logout();
  }

}
