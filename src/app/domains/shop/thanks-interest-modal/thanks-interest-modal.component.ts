import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-thanks-interest-modal',
  standalone: true,
  imports: [],
  templateUrl: './thanks-interest-modal.component.html',
  styleUrl: './thanks-interest-modal.component.css'
})
export class ThanksInterestModalComponent {

  @Output() showThanksForInterest = new EventEmitter();


  closeThanksForYourInterestAlert() {
    // alert('CLOSE ALERT this fall 2024. Stay tuned!')
    this.showThanksForInterest.emit(false);
  };


}
