import { Component, inject, Output, EventEmitter } from '@angular/core';
import { JsonPipe } from '@angular/common';

import { ReactiveFormsModule, FormControl } from '@angular/forms';

import { ShippingService } from '@services/shipping.service';


@Component({
  selector: 'app-shippingmethod',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './shippingmethod.component.html',
  styleUrl: './shippingmethod.component.css'
})
export class ShippingmethodComponent {

  @Output() shippingText = new EventEmitter();

  private shippingService = inject(ShippingService);

  shippingField = new FormControl();

  ngOnInit() {
    this.shippingField.valueChanges
    .subscribe(value => {
      // console.log(value);
      this.shippingService.setValue(value);
      this.shippingService.setShippingTextValue(value);
    })
  }


  // getValue() {
  //   console.log(this.shippingField.value);
  //   // console.log(this.shippingFieldRadio.value);
  // };



}
