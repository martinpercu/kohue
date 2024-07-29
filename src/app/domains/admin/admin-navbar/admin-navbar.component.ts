import { Component, inject } from '@angular/core';

import { Router } from '@angular/router';

import { ButtonlogoutComponent } from '@shared/buttonlogout/buttonlogout.component'


@Component({
  selector: 'app-admin-navbar',
  standalone: true,
  imports: [ButtonlogoutComponent],
  templateUrl: './admin-navbar.component.html',
  styleUrl: './admin-navbar.component.css'
})
export class AdminNavbarComponent {

  private router = inject(Router);

  showAll() {
    alert('not working yet');
  };

  showUsers() {
    this.router.navigate(['usersadmin'])
  };


  showJoined() {
    this.router.navigate(['joinedadmin'])
  };



}
