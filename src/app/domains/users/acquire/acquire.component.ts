import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { NavbarComponent } from '@shared/navbar/navbar.component';

@Component({
  selector: 'app-acquire',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './acquire.component.html',
  styleUrl: './acquire.component.css'
})
export class AcquireComponent {


  private router = inject(Router);



  navJointhelist() {
    this.router.navigate(['join'])
  };

  navMembersArea() {
    this.router.navigate(['edit'])
  };


}
