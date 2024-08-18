import { Component, OnInit, inject } from '@angular/core';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import { Functions } from '@angular/fire/functions';

import { stripePublic } from '@env/environment'


@Component({
  selector: 'app-stripe',
  standalone: true,
  imports: [],
  templateUrl: './stripe.component.html',
  styleUrl: './stripe.component.css'
})
export class StripeComponent {
  // private stripe: Stripe;

  // private fns = inject(Functions);


  // async ngOnInit() {
  //   this.stripe = await loadStripe(stripePublic);
  //   const elements = this.stripe.elements();

  //   const style = {
  //     base: {
  //       color: '#32325d',
  //       fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
  //       fontSmoothing: 'antialiased',
  //       fontSize: (window.innerWidth <= 500) ? '12px' : '16px',
  //       '::placeholder': {
  //         color: '#aab7c4'
  //       }
  //     },
  //     invalid: {
  //       color: '#fa755a',
  //       iconColor: '#fa755a'
  //     }
  //   };


  //   const card = elements.create('card', { style });


  //   card.mount('#card-element');

  //   card.on('change', (event) => {
  //     const displayError = document.getElementById('card-errors');
  //     if (displayError) {
  //       if (event.error) {
  //         displayError.textContent = event.error.message;
  //       } else {
  //         displayError.textContent = '';
  //       }
  //     }


  //   });

  //   const button = document.getElementById('button');
  //   if (button) {
  //     button.addEventListener('click', (event) => {
  //       event.preventDefault();
  //       const ownerInfo = {
  //         owner: {
  //           name: 'user'
  //         },
  //         amount: 20000,
  //         currency: 'usd'
  //       };

  //       this.stripe.createSource(card, ownerInfo).then((result) => {
  //         console.log(result);
  //         if (result.error) {
  //           const errorElement = document.getElementById('card-errors');
  //           // errorElement.textContent = result.error.message;
  //         } else {
  //           // this.stripeSourceHandler(result.source);
  //         }
  //       });
  //     });
  //   }

  // }

  // private stripeSourceHandler(source: any): void {
  //   const callable = this.fns.httpsCallable('stripeChargeCall');
  //   const obs = callable(source);
  //   obs.subscribe(res => {
  //     console.log(res);
  //     if (res.result === 'SUCCESSFUL') {
  //       document.getElementsByClassName('text')[0].innerHTML = 'Flower Paid 💸, Thanks';
  //     } else {
  //       document.getElementsByClassName('text')[0].innerHTML = 'Something went wrong. 😞';
  //     }
  //   });
  // }
}
