import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { NavbarComponent } from '@shared/navbar/navbar.component';
import { FooterComponent } from '@shared/footer/footer.component';


@Component({
  selector: 'app-ourwines',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './ourwines.component.html',
  styleUrl: './ourwines.component.css'
})
export class OurwinesComponent {
  private router = inject(Router);

  navToHome() {
    this.router.navigate([''])
  };

}
