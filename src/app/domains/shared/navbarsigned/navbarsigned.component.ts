import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbarsigned',
  standalone: true,
  imports: [],
  templateUrl: './navbarsigned.component.html',
  styleUrl: './navbarsigned.component.css'
})
export class NavbarsignedComponent {

  private router = inject(Router);


  hideSideMenu = signal(true);
  cart: any = signal('sed');


  // logOut() {
  //   this.authService.logout()
  //   .then(() => {
  //     this.router.navigate(['login'])
  //   })
  //   .catch(error => console.log(error));
  // }


  toggleSideMenu() {
    this.hideSideMenu.update(previousState => !previousState)
  }

  navToHome() {
    this.router.navigate(['test'])
  };

  navEdit() {
    this.router.navigate(['edit'])
  };

  navAcquire() {
    this.router.navigate(['acquire'])
  };

  navBuywine() {
    this.router.navigate(['buywine'])
  };

}
