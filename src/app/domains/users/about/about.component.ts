import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

import { NavbarComponent } from '@shared/navbar/navbar.component';
import { FooterComponent } from '@shared/footer/footer.component';
@Component({

  selector: 'app-about',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
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

export class AboutComponent implements OnInit, OnDestroy {
  private router = inject(Router);
  private intervalId: ReturnType<typeof setInterval> | null = null;

  showRootedInMendoza: boolean = false;
  showGroundedInNapaValley: boolean = false;

  ngOnInit() {
    this.showRootedInMendoza = true;
    const textAboutLoopDisabled = localStorage.getItem('textAboutLoopDisabled');
    if (!textAboutLoopDisabled) {
      this.startTextLoop();
    }
  }

  ngOnDestroy() {
    this.stopTextLoop();
  }

  navToHome() {
    this.router.navigate([''])
  };

  handleSwitchText() {
    this.stopTextLoop();
    localStorage.setItem('textAboutLoopDisabled', 'true');
    this.showRootedInMendoza = !this.showRootedInMendoza;
    this.showGroundedInNapaValley = !this.showGroundedInNapaValley;
  }

  handleSwitchTextAuto() {
    this.showRootedInMendoza = !this.showRootedInMendoza;
    this.showGroundedInNapaValley = !this.showGroundedInNapaValley;
  }

  private startTextLoop() {
    this.intervalId = setInterval(() => {
      this.handleSwitchTextAuto();
    }, 54000);
  }

  private stopTextLoop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}
