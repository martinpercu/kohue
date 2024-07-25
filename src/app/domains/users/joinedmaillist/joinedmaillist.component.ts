import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { NavbarComponent } from '@shared/navbar/navbar.component'



@Component({
  selector: 'app-joinedmaillist',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './joinedmaillist.component.html',
  styleUrl: './joinedmaillist.component.css'
})
export class JoinedmaillistComponent {

  private router = inject(Router);

  navToRoot() {
    this.router.navigate(['/'])
  }

}
