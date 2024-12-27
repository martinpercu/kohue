import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { NavbarComponent } from '@shared/navbar/navbar.component';
import { FooterComponent } from '@shared/footer/footer.component';



@Component({
  selector: 'app-joinedmaillist',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './joinedmaillist.component.html',
  styleUrl: './joinedmaillist.component.css'
})
export class JoinedmaillistComponent {

  private router = inject(Router);

  navToRoot() {
    this.router.navigate(['/'])
  }


  navToLinkFromEmail() {
    this.router.navigate(['signin'])
  }

  navToHome() {
    this.router.navigate([''])
  };

}
