import { Component, inject } from '@angular/core';
import { NavbarsignedComponent } from '@shared/navbarsigned/navbarsigned.component';
import { FooterComponent } from '@shared/footer/footer.component';
import { Product } from '@models/product.model';

import { MonoproductService  } from '@services/monoproduct.service';

import { environment } from '@env/environment';
import { StripeService } from '@services/stripe.service';
import { lastValueFrom } from 'rxjs';

import { ShippingPolicyModalComponent } from '@shop/shipping-policy-modal/shipping-policy-modal.component'


@Component({
  selector: 'app-directlink-3',
  standalone: true,
  imports: [NavbarsignedComponent, FooterComponent, ShippingPolicyModalComponent],
  templateUrl: './directlink-3.component.html'
})
export class Directlink3Component {

  private monoproductService = inject(MonoproductService);
  private stripeService = inject(StripeService);

  monoproduct: Product;
  stripeSession!: any;

  quantities:number = 1;

  showPolicy: boolean = false;

  constructor() {
    this.monoproduct = this.monoproductService.returnMonoproduct();
    // console.log(this.monoproduct);
  };

  toCheckoutLink() {
    // let checkoutUrl = environment.PAYMENT_LINK;
    // window.location.href = checkoutUrl;
    this.checkoutToStripeDirectLink()
  };

  async checkoutToStripeDirectLink() {
    const product = "este producto copado";
    const quantity = 1;
    const stripeShippingId1 = environment.SHIP_LOCAL;
    const stripeShippingId2 = environment.SHIP_GROUND_1_ONE;
    const stripeShippingId3 = environment.SHIP_OVERNIGHT_1_ONE;
    // const stripeShippingId2 = this.getShippingId2Rates();
    // const stripeShippingId3 = this.getShippingId3Rates();

    const priceProductId = environment.PRICE_PRODUCT_ONE;
    console.log(quantity);


    console.log(
      quantity, "otro", stripeShippingId1, "otro    ===>", stripeShippingId2, "again ===>",  stripeShippingId3
    );

    const sessionToWait$ = this.stripeService.getDirectLinkSessionCheckout(product, quantity, stripeShippingId1, stripeShippingId2, stripeShippingId3, priceProductId);
    this.stripeSession = await lastValueFrom(sessionToWait$);
    console.log(sessionToWait$);
    console.log(this.stripeSession);
    if (this.stripeSession) {
      let checkoutUrl = this.stripeSession.url;
      window.location.href = checkoutUrl;
    }
  };


  fromShippingPolicy(event: boolean) {
    this.showPolicy = event
  };

  showShippingPolicy() {
    this.showPolicy = true
  }


  // getShippingId2Rates() {
  //   if(this.quantities == 1) {
  //     return environment.SHIP_GROUND_1
  //   };
  //   if(this.quantities == 2) {
  //     return environment.SHIP_GROUND_2
  //   };
  //   if(this.quantities == 3) {
  //     return environment.SHIP_GROUND_3
  //   }
  //   return null
  // };

  // getShippingId3Rates() {
  //   if(this.quantities == 1) {
  //     return environment.SHIP_OVERNIGHT_1
  //   };
  //   if(this.quantities == 2) {
  //     return environment.SHIP_OVERNIGHT_2
  //   };
  //   if(this.quantities == 3) {
  //     return environment.SHIP_OVERNIGHT_3
  //   }
  //   return null
  // }

  // addOne() {
  //   this.quantities = this.quantities +1
  // };


  // subtractOne() {
  //   this.quantities = this.quantities -1
  // }



}
