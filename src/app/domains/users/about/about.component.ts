import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { NavbarComponent } from '@shared/navbar/navbar.component';
import { FooterComponent } from '@shared/footer/footer.component';
@Component({

  selector: 'app-about',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  private router = inject(Router);

  navToHome() {
    this.router.navigate([''])
  };


}
