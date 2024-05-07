import { Component, inject } from '@angular/core';
// import { NavbarComponent } from '@shared/navbar/navbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [],
  // imports: [NavbarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  private router = inject(Router);


  navJointhelist() {
    this.router.navigate(['join'])
  };

  navToEdit() {
    this.router.navigate(['edit'])
  };

  navToAcquire() {
    this.router.navigate(['acquire'])
  };


}
