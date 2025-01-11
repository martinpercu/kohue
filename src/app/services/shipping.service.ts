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
      this.cartService.setShippingStripeId('shr_1Pzh4ERtorj52eamXRL27RHT');
    }
    if (loquesea == 'Ground shipping') {
      this.cartService.setShippingAmount(20);
      this.cartService.setShippingStripeId('shr_1Pzh4nRtorj52eamvxRLabqL');
    }
    if (loquesea == 'Piola el shipping') {
      this.cartService.setShippingAmount(45);
      this.cartService.setShippingStripeId('shr_1Pzh5JRtorj52eamhpKyUEpL');
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
