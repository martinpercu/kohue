import { Component, inject } from '@angular/core';
import { AuthService } from '@services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  private authService = inject(AuthService);
  private router = inject(Router);



  navToHome() {
    this.router.navigate([''])
  };

  navJointhelist() {
    this.router.navigate(['join'])
  };

  navMembers() {
    this.router.navigate(['members'])
  };


}
