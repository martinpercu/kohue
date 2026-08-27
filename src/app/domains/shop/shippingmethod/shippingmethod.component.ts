import { Component, inject, Input, Output, EventEmitter, OnChanges } from '@angular/core';
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
export class ShippingmethodComponent implements OnChanges {

  // @Output() shippingText = new EventEmitter();

  @Input() disabled: boolean = false;

  private shippingService = inject(ShippingService);

  shippingField = new FormControl();

  ngOnChanges() {
    if (this.disabled) {
      this.shippingField.disable();
    } else {
      this.shippingField.enable();
      if (this.shippingField.value) {
        this.shippingService.setValue(this.shippingField.value);
        this.shippingService.setShippingTextValue(this.shippingField.value);
      }
    }
  }

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
