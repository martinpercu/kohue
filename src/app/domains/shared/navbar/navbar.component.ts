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

  // logOut() {
  //   this.authService.logout()
  //   .then(() => {
  //     this.router.navigate(['login'])
  //   })
  //   .catch(error => console.log(error));
  // }


  navToHome() {
    this.router.navigate(['test'])
  };

  navJointhelist() {
    this.router.navigate(['join'])
  };

  navEdit() {
    this.router.navigate(['edit'])
  };

  navAcquire() {
    this.router.navigate(['acquire'])
  };

}
