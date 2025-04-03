import { Component, inject } from '@angular/core';
// import { NavbarComponent } from '@shared/navbar/navbar.component';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [],
  // imports: [NavbarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  private router = inject(Router);

  authService = inject(AuthService);


  navJointhelist() {
    this.router.navigate(['join'])
  };

  navToShopArea() {
    this.router.navigate(['members'])
  };

  navToAcquire() {
    this.router.navigate(['acquire'])
  };

  navOurWines() {
    this.router.navigate(['ourwines'])
  };

  navAbout() {
    this.router.navigate(['about'])
  };


}
