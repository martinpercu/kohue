import { Component, inject } from '@angular/core';
import { NavbarComponent } from '@shared/navbar/navbar.component';
import { lastValueFrom } from 'rxjs';

import { StripeService } from '@services/stripe.service';

@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.css'
})
export class NotfoundComponent {

  private stripeService = inject(StripeService);

  session!: any;

  async testCreateSession() {
    const user = "blabla USER";
    const product = "este producto copado";
    const quantity = 3;
    const test$ = this.stripeService.getSessionCheckout(user, product, quantity);
    this.session = await lastValueFrom(test$);
    console.log(test$);
    console.log(this.session);
    if (this.session) {
      let checkoutUrl = this.session.url;
      window.location.href = checkoutUrl;
    }
  };

  async testerComun() {
    // const test$ = this.stripeService.tester();
    // this.algo = await lastValueFrom(test$);
    // console.log(test$);
    // console.log(this.algo);
  }

}
