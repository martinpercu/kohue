import { Injectable, inject } from '@angular/core';
import { CartService } from '@services/cart.service';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {

  private cartService = inject(CartService);

  itemsQty = this.cartService.totalItems

  constructor() { }


  setValue(loquesea: any) {
    const itemsQty = this.itemsQty();

    if (itemsQty === 0 || itemsQty > 3) {
      console.log("items Quantity is Zero or more than 3");
      return;
    }

    const shippingOptions: { [key: string]: { [key: number]: { amount: number; stripeId: string } } } = {
      'Overnight': {
        1: { amount: 70, stripeId: 'shr_1Q9DMORtorj52eamUIRTakJP' },
        2: { amount: 90, stripeId: 'shr_1Q9DN1Rtorj52eam64QBfwox' },
        3: { amount: 130, stripeId: 'shr_1Q9DNcRtorj52eamGqVLAmrT' },
      },
      'Ground shipping': {
        1: { amount: 35, stripeId: 'shr_1Q9DKCRtorj52eamOGY2Ji3I' },
        2: { amount: 45, stripeId: 'shr_1Q9DKtRtorj52eamkwdF4Mpd' },
        3: { amount: 85, stripeId: 'shr_1Q9DLaRtorj52eamd4NPoayQ' },
      },
      'Local Pick up': {
        1: { amount: 0, stripeId: 'shr_1Q9DOaRtorj52eamlK75bRNi' }, // For consistency, you can have this, even if it doesn't depend on quantity
      },
    };

    const shippingDetails = shippingOptions[loquesea]?.[itemsQty];

    if (shippingDetails) {
      this.cartService.setShippingAmount(shippingDetails.amount);
      this.cartService.setShippingStripeId(shippingDetails.stripeId);
    } else {
      console.log('algo anda mal ver shipping service');
    }
  }

  // setValue(loquesea: any) {
  //   if (this.itemsQty() != 0) {
  //     if (loquesea == 'Overnight') {
  //       if (this.itemsQty() == 1) {
  //         this.cartService.setShippingAmount(70);
  //         this.cartService.setShippingStripeId('shr_1Q1F5iRtorj52eam8u8CYusJ');
  //       }
  //       if (this.itemsQty() == 2) {
  //         this.cartService.setShippingAmount(90);
  //         this.cartService.setShippingStripeId('shr_1Q1F5iRtorj52eam8u8CYusJ');
  //       }
  //       if (this.itemsQty() == 3) {
  //         console.log('Estamos en 3 ');
  //         this.cartService.setShippingAmount(130);
  //         this.cartService.setShippingStripeId('shr_1Q1F5iRtorj52eam8u8CYusJ');
  //       }
  //       if (this.itemsQty() == 4) {
  //         this.cartService.setShippingAmount(180);
  //         this.cartService.setShippingStripeId('shr_1Q1F5iRtorj52eam8u8CYusJ');
  //       } else {
  //         console.log('algo anda mal ver shipping service');
  //       }
  //     }
  //     if (loquesea == 'Ground shipping') {
  //       if (this.itemsQty() == 1) {
  //         this.cartService.setShippingAmount(35);
  //         this.cartService.setShippingStripeId('shr_1Q1F6ORtorj52eamZ8CP3yAi');
  //       }
  //       if (this.itemsQty() == 2) {
  //         this.cartService.setShippingAmount(45);
  //         this.cartService.setShippingStripeId('shr_1Q1F6ORtorj52eamZ8CP3yAi');
  //       }
  //       if (this.itemsQty() == 3) {
  //         console.log('Estamos en 3 ');
  //         this.cartService.setShippingAmount(85);
  //         this.cartService.setShippingStripeId('shr_1Q1F6ORtorj52eamZ8CP3yAi');
  //       }
  //       if (this.itemsQty() == 4) {
  //         this.cartService.setShippingAmount(95);
  //         this.cartService.setShippingStripeId('shr_1Q1F6ORtorj52eamZ8CP3yAi');
  //       }
  //     }
  //     if (loquesea == 'Local Pick up') {
  //       this.cartService.setShippingAmount(0);
  //       this.cartService.setShippingStripeId('none');
  //     }
  //   }
  //   else {
  //     console.log("items Quantity is Zero or more than 4");
  //   }

  // };

  setShippingTextValue(loquesea: any) {
    // console.log(typeof(loquesea));
    this.cartService.setShippingText(loquesea)
  }

  setText() {
    return 'hello'

  }


}
