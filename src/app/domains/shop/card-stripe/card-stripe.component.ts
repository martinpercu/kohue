import { Component, ElementRef, NgZone, ViewChild, inject, AfterViewInit, OnChanges } from '@angular/core';

import { StripeService } from '@services/stripe.service';
import { lastValueFrom } from 'rxjs';

import { CartService } from '@services/cart.service';
import { AuthService } from '@services/auth.service';
import { ClientService } from '@services/client.service';

import { Client } from '@models/client.model'

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
  private cartService = inject(CartService);
  private auth = inject(AuthService);
  private clientService = inject(ClientService);

  algo: any;
  algo2: any;
  algo3: any;

  totalAmount = this.cartService.totalAmount;

  private userId!: any;
  user!: Client;

  userIsStripeOk: boolean = false;

  constructor() {
    const id = this.auth.getUserUid();
    if (id) {
      this.userId = id
      console.log('IN STRIPE CARD hay parametro', this.userId);
      // this.getUser()
    }
  };

  // ngOnChanges() {

  // }

  async ngOnInit() {
    console.log(this.userIsStripeOk);
    this.user = await this.clientService.getOneUser(this.userId);
    console.log(this.user);
    if(!this.user.stripeCustomerId) {
      this.createStripeUser();
    } else {
      this.userIsStripeOk = true
      console.log("Stripe user ID ==>   ", this.user.stripeCustomerId);
    };
  };


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
      disableLink: true
    });
    this.card.mount(this.cardInfo.nativeElement);
    this.card.addEventListener('change', this.onChange.bind(this));
  };

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


  async getUser() {
    const userGetted = await this.clientService.getOneUser(this.userId);
    this.user = userGetted
    console.log(this.user);
    return userGetted
  };


  async createStripeUser() {
    // const user = await this.getUser();
    console.log(this.user);
    // const userStripe = {
    //   name: user.firstname,
    //   email: user.email
    // };
    const userStripe = {
      name: "Jua erino",
      email: "jacd@gigantes.com"
    }
    // const algo$ = await this.stripeService.createUser(userStripe);
    // this.algo = await lastValueFrom(algo$);
    // console.log(algo$);
    console.log(this.algo);
    console.log(userStripe);
  };

  async testAPI() {
    const test$ = await this.stripeService.tester();
    this.algo2 = await lastValueFrom(test$);
    console.log(test$);
    console.log(this.algo2);
  };


  async startPayment() {
    const user = await this.getUser();
    if (!user.fullname) {
      user.fullname = user.firstname + " " + user.lastname;
    };
    console.log(user.fullname);
    const ownerInfo = {
      owner: {
        name: user.fullname,
        email: user.email,
        phone: user.phone,
        address: {
          city: user.city,
          country: 'US',
          postal_code: user.zipCode,
          line1: user.address,
          line2: user.addressExtra,
          state: user.state
        }
      },
      // amount: 12500,
      amount: this.totalAmount(),
    };

    console.log(ownerInfo);
    this.payAndCreateUser(ownerInfo);

  };

  async payAndCreateUser(ownerInfo: any) {
    console.log(ownerInfo);

    const { source } = await stripe.createSource(this.card, ownerInfo);
    if (source) {
      console.log('source');
      console.log(source);
      const algo3$ = await this.stripeService.charge2(source);
      this.algo3 = await lastValueFrom(algo3$);
      console.log(this.algo3);
      console.log(this.user);
      this.user.stripeCustomerId = this.algo3.customer
      console.log(this.user);

      if(this.algo3.customer) {
        this.user.stripeCustomerId = this.algo3.customer
        console.log(this.user);
        this.clientService.updateOneUser(this.user, this.user.clientUID);
      }


    } else {
      this.ngZone.run(() => {
        // this.cardError = error.message;
      });
    }

  };


  // async createTokenAndPay() {
  //   const amount = 4500
  //   const { token, error } = await stripe.createToken(this.card);
  //   if (token) {
  //     console.log('token');
  //     console.log(token);
  //     console.log(token.id);
  //     console.log('amount');
  //     console.log(amount);
  //     const algo2$ = await this.stripeService.cardTokenCharge(token, amount);
  //     this.algo2 = await lastValueFrom(algo2$);
  //     console.log(this.algo2);

  //   } else {
  //     this.ngZone.run(() => {
  //       this.cardError = error.message;
  //     });
  //   }
  // };


}
