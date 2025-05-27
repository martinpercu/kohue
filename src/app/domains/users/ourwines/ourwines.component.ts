import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { NavbarComponent } from '@shared/navbar/navbar.component';
import { FooterComponent } from '@shared/footer/footer.component';

import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-ourwines',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './ourwines.component.html',
  styleUrl: './ourwines.component.css'
})
export class OurwinesComponent {
  private router = inject(Router);

  authService = inject(AuthService);

  navToHome() {
    this.router.navigate([''])
  };

  navToSignIn() {
    this.router.navigate(['join'])
  };

  navToMembers() {
    this.router.navigate(['members'])
  }

  toPdf(path: any) {
    const pdfPath = path;
    if (pdfPath) {
      window.open(`/assets/pdf/${pdfPath}`, '_blank');
      // this.router.navigate(['/pdf-viewer']);
    } else {
      alert('No hay PDF disponible');
    }
  }


}
