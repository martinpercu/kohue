import { Injectable, inject } from '@angular/core';
import { CartService } from '@services/cart.service';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {

  private cartService = inject(CartService);

  constructor() { }


  setValue(loquesea: any) {
    if (loquesea == 'Pick up at Warehouse') {
      this.cartService.setShippingAmount(6);
      this.cartService.setShippingStripeId('shr_1Q1F5iRtorj52eam8u8CYusJ');
    }
    if (loquesea == 'Ground shipping') {
      this.cartService.setShippingAmount(20);
      this.cartService.setShippingStripeId('shr_1Q1F6ORtorj52eamZ8CP3yAi');
    }
    if (loquesea == 'Piola el shipping') {
      this.cartService.setShippingAmount(77);
      this.cartService.setShippingStripeId('shr_1Q1F77Rtorj52eamdP5PbwGR');
    }
    if (loquesea == 'UPS Ground') {
      this.cartService.setShippingAmount(33)
    }
  };

  setShippingTextValue(loquesea:any) {
    // console.log(typeof(loquesea));
    this.cartService.setShippingText(loquesea)
  }

  setText() {
    return 'hello'

  }


}
