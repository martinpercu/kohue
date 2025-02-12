import { Component, inject } from '@angular/core';
import { NavbarsignedComponent } from '@shared/navbarsigned/navbarsigned.component';
import { FooterComponent } from '@shared/footer/footer.component';
import { Product } from '@models/product.model';

import { MonoproductService  } from '@services/monoproduct.service';

import { environment } from '@env/environment';
import { StripeService } from '@services/stripe.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-directlink',
  standalone: true,
  imports: [NavbarsignedComponent, FooterComponent],
  templateUrl: './directlink.component.html',
  styleUrl: './directlink.component.css'
})
export class DirectlinkComponent {

  private monoproductService = inject(MonoproductService);
  private stripeService = inject(StripeService);

  monoproduct: Product;
  stripeSession!: any;

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
    const stripeShippingId2 = environment.SHIP_GROUND_1;
    const stripeShippingId3 = environment.SHIP_OVERNIGHT_1;
    const priceProductId = environment.PRICE_PRODUCT;

    const sessionToWait$ = this.stripeService.getDirectLinkSessionCheckout(product, quantity, stripeShippingId1, stripeShippingId2, stripeShippingId3, priceProductId);
    this.stripeSession = await lastValueFrom(sessionToWait$);
    // console.log(sessionToWait$);
    // console.log(this.stripeSession);
    if (this.stripeSession) {
      let checkoutUrl = this.stripeSession.url;
      window.location.href = checkoutUrl;
    }
  };


}
