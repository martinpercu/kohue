import { CookieService } from 'ngx-cookie-service';

import { Component, inject } from '@angular/core';


@Component({
  selector: 'app-agegate',
  standalone: true,
  imports: [],
  providers: [CookieService],
  templateUrl: './agegate.component.html',
  styleUrl: './agegate.component.css'
})
export class AgegateComponent {

  private cookieService = inject(CookieService);

  showGate:boolean;

  showAlert:boolean;

  cookieValue: string = '';

  constructor() {
    this.showAlert = false
    const older = this.cookieService.get('ageKey');
    console.log(older);
    if(older == 'older') {
      // alert('vamoooo');
      this.showGate = false
    }else{
      // alert('pendejo');
      this.showGate = true
    };


   };


  saveToLocalStorage() {
    this.cookieService.set('ageKey', 'older', { expires: 31, sameSite: 'Lax' });
    this.showGate = false
  };

  retrieveFromLocalStorage() {
    const value2 = this.cookieService.get('ageKey');
    this.showAlert = true;
  };

  clearLocalStorage() {
    const value2 = this.cookieService.get('ageKey');
    console.log(value2);
  };

  goToLink(url: string) {
    window.open(url, "_blank");
  }

}
