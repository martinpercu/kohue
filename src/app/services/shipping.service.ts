import { Injectable, inject } from '@angular/core';
import { CartService } from '@services/cart.service';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {

  private cartService = inject(CartService);

  constructor() { }


  setValue(loquesea: any) {
    if (loquesea == 'UPS Next day') {
      this.cartService.setShippingAmount(80)
    }
    if (loquesea == 'UPS 2nd day') {
      this.cartService.setShippingAmount(65)
    }
    if (loquesea == 'UPS 3 days') {
      this.cartService.setShippingAmount(40)
    }
    if (loquesea == 'UPS Ground') {
      this.cartService.setShippingAmount(33)
    }
  };

  setShippingTextValue(loquesea:any) {
    console.log(typeof(loquesea));
    this.cartService.setShippingText(loquesea)
  }

  setText() {
    return 'hello'

  }


}
