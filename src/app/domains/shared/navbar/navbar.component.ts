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

  authService = inject(AuthService);
  private router = inject(Router);




  navToHome() {
    this.router.navigate(['']);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  navJointhelist() {
    this.router.navigate(['join']);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  navMembers() {
    this.router.navigate(['members']);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  navOurWines() {
    this.router.navigate(['ourwines']);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  navAbout() {
    this.router.navigate(['about']);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };


}
