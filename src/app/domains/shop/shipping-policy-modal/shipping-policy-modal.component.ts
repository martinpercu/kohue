import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shipping-policy-modal',
  standalone: true,
  imports: [],
  templateUrl: './shipping-policy-modal.component.html',
  styleUrl: './shipping-policy-modal.component.css'
})
export class ShippingPolicyModalComponent {

  @Output() showStayTuned = new EventEmitter();


  closeShippingPolicyAlert() {
    // alert('CLOSE ALERT this fall 2024. Stay tuned!')
    this.showStayTuned.emit(false);
  };



}
