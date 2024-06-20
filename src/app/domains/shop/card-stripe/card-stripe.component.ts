import { Component, ElementRef, NgZone, ViewChild, inject, AfterViewInit } from '@angular/core';

import { StripeService } from '@services/stripe.service';
import { lastValueFrom } from 'rxjs';


@Component({
  selector: 'app-card-stripe',
  standalone: true,
  imports: [],
  templateUrl: './card-stripe.component.html',
  styleUrl: './card-stripe.component.css'
})
export class CardStripeComponent implements AfterViewInit {


  @ViewChild('cardInfo')
  cardInfo!: ElementRef;
  cardError!: string | null;
  card: any;


  private ngZone = inject(NgZone);
  private stripeService = inject(StripeService);

  algo: any;
  algo2: any;


  ngAfterViewInit(): void {
    this.card = elements.create('card', {
      style: {
        base: {
          // iconColor: '#c4f0ff',
          // iconColor: 'green',
          // color: '#ccc',
          // fontWeight: '400',
          // fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
          // fontSize: '16px',
          // fontSmoothing: 'antialiased',
          // ':-webkit-autofill': {
          //   color: '#fce883',
          // },
          // ':focus': {
          //   fontSize: '18px',
          //   fontWeight: '600'
          // },
          // '::placeholder': {
          //   color: '#87BBFD',
          // },
        },
        // invalid: {
        //   iconColor: '#FFC7EE',
        //   color: '#FFC7EE',
        // },
        // complete: {
        //   color: '#e7e319',
        // }
      },
      hidePostalCode: true,
    });
    this.card.mount(this.cardInfo.nativeElement);
    this.card.addEventListener('change', this.onChange.bind(this));

    // this.payment = elements.create('payment');
    // this.payment.mount(this.paymentInfo.nativeElement);
    // this.payment.addEventListener('change', this.onChange2.bind(this));

  }

  onChange({ error }: any) {
    if (error) {
      this.ngZone.run(() => {
        this.cardError = error.message;
      });
    } else {
      this.ngZone.run(() => {
        this.cardError = null;
      });
    }
  };


  async createUser() {
    const user = {
      name: "aaMarcico Juan pelado",
      email: "aamarcico@masdfr.com",
      phone: "654856452"
    }
    const algo$ = await this.stripeService.createUser(user);
    this.algo = await lastValueFrom(algo$);
    console.log(algo$);
    console.log(this.algo);
  };

  async createTokenAndPay() {
    const amount = 1500
    const { token, error } = await stripe.createToken(this.card);
    if (token) {
      console.log('token');
      console.log(token);
      console.log(token.id);
      console.log('amount');
      console.log(amount);
      // const algo2$ = await this.stripeService.cardTokenCharge(token, amount);
      // this.algo2 = await lastValueFrom(algo2$);
      // console.log(this.algo2);

    } else {
      this.ngZone.run(() => {
        this.cardError = error.message;
      });
    }
  };


  async addCardPlusOwner() {
    const ownerInfo = {
      owner: {
        name: 'MaTROLO'
      },
      amount: 2500,
    }
    const { source } = await stripe.createSource(this.card, ownerInfo);
    if (source) {
      console.log('source');
      console.log(source);
      // const regreso = this.stripeService.charge2(source);
      // console.log(regreso);

    } else {
      this.ngZone.run(() => {
        // this.cardError = error.message;
      });
    }
  }
}
