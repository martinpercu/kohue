import { Injectable, inject } from '@angular/core';
import { CartService } from '@services/cart.service';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {

  private cartService = inject(CartService);

  constructor() { }


  setValue(loquesea: any) {
    if (loquesea == 'shipChoice-1') {
      this.cartService.setShippingAmount(80)
    }
    if (loquesea == 'shipChoice-2') {
      this.cartService.setShippingAmount(65)
    }
    if (loquesea == 'shipChoice-3') {
      this.cartService.setShippingAmount(40)
    }
    if (loquesea == 'shipChoice-4') {
      this.cartService.setShippingAmount(33)
    }
  }
}
