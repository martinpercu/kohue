import { Component, inject, OnInit, OnDestroy } from '@angular/core';
// import { NavbarComponent } from '@shared/navbar/navbar.component';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { trigger, transition, style, animate } from '@angular/animations';



@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [],
  // imports: [NavbarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('700ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('700ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class LayoutComponent {

  private router = inject(Router);

  authService = inject(AuthService);

  private intervalId: ReturnType<typeof setInterval> | null = null;
  private readonly FADE_DURATION = 2000;

  showMendoza: boolean = false;
  showNapa: boolean = false;
  zoomMendoza: boolean = false;
  zoomNapa: boolean = false;

  ngOnInit() {
    const startWithNapa = localStorage.getItem('layoutStartWith') === 'napa';
    localStorage.setItem('layoutStartWith', startWithNapa ? 'mendoza' : 'napa');

    if (startWithNapa) {
      this.showNapa = true;
    } else {
      this.showMendoza = true;
    }

    setTimeout(() => {
      if (startWithNapa) {
        this.zoomNapa = true;
      } else {
        this.zoomMendoza = true;
      }
    });
    this.startLoop();
  }

  ngOnDestroy() {
    this.stopTextLoop();
  }

  switchBackgroundAuto() {
    this.showMendoza = !this.showMendoza;
    this.showNapa = !this.showNapa;

    if (this.showNapa) {
      this.zoomNapa = true;
      setTimeout(() => { this.zoomMendoza = false; }, this.FADE_DURATION);
    } else {
      this.zoomMendoza = true;
      setTimeout(() => { this.zoomNapa = false; }, this.FADE_DURATION);
    }
  }

  private startLoop() {
    this.intervalId = setInterval(() => {
      this.switchBackgroundAuto();
    }, 5000);
  }

  private stopTextLoop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }




  navJointhelist() {
    this.router.navigate(['join'])
  };

  navToShopArea() {
    this.router.navigate(['members'])
  };

  navToAcquire() {
    this.router.navigate(['acquire'])
  };

  navOurWines() {
    this.router.navigate(['ourwines'])
  };

  navAbout() {
    this.router.navigate(['about'])
  };


}
