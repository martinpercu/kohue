import { Component, inject } from '@angular/core';

import { AgegateService } from '@services/agegate.service'

@Component({
  selector: 'app-agegate',
  standalone: true,
  imports: [],
  templateUrl: './agegate.component.html',
  styleUrl: './agegate.component.css'
})
export class AgegateComponent {

  private agegateService = inject(AgegateService);

  showGate:boolean;

  showAlert:boolean;

  constructor() {
    this.showAlert = false
    const older = this.agegateService.getItem('ageKey');
    console.log(older);
    if(older == 'older') {
      // alert('vamoooo');
      this.showGate = false
    }else{
      // alert('pendejo');
      this.showGate = true
    }
   };


  saveToLocalStorage() {
    this.agegateService.setItem('ageKey', 'older');
    this.showGate = false
  };

  retrieveFromLocalStorage() {
    const value = this.agegateService.getItem('ageKey');
    this.showAlert = true;
  };

  clearLocalStorage() {
    const value = this.agegateService.clear();
    console.log(value);
  };

  goToLink(url: string) {
    window.open(url, "_blank");
  }

}
