import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

import { NavbarComponent } from '@shared/navbar/navbar.component';
import { FooterComponent } from '@shared/footer/footer.component';

import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-ourwines',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './ourwines.component.html',
  styleUrl: './ourwines.component.css',
    animations: [
      trigger('fadeInOut', [
        transition(':enter', [
          style({ opacity: 0 }),
          animate('700ms ease-in', style({ opacity: 1 }))
        ]),
        transition(':leave', [
          animate('700ms ease-out', style({ opacity: 0 }))
        ])
      ]),
  
      trigger('fadeInOutTitles', [
        transition(':enter', [
          style({ opacity: 0 }),
          animate('1700ms ease-in', style({ opacity: 1 }))
        ]),
        transition(':leave', [
          animate('1700ms ease-out', style({ opacity: 0.5 }))
        ])
      ])
    ]
  })

export class OurwinesComponent {
  private router = inject(Router);
  private intervalId: ReturnType<typeof setInterval> | null = null;
  showMendozaWine: boolean = false;
  showNapaWine: boolean = false;

  authService = inject(AuthService);

  ngOnInit() {
    this.showMendozaWine = true;
    const textWineLoopDisabled = localStorage.getItem('textWineLoopDisabled');
    if (!textWineLoopDisabled) {
      this.startTextLoop();
    }
  }

  ngOnDestroy() {
    this.stopTextLoop();
  }

  handleSwitchText() {
    this.stopTextLoop();
    localStorage.setItem('textWineLoopDisabled', 'true');
    this.showMendozaWine = !this.showMendozaWine;
    this.showNapaWine = !this.showNapaWine;
  }

  handleSwitchTextAuto() {
    this.showMendozaWine = !this.showMendozaWine;
    this.showNapaWine = !this.showNapaWine;
  }

  private startTextLoop() {
    this.intervalId = setInterval(() => {
      this.handleSwitchTextAuto();
    }, 52000);
  }

  private stopTextLoop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }


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
