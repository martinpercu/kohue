import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';

import { Client } from '@models/client.model';
import { lastValueFrom } from 'rxjs';
import { ClientService } from '@services/client.service';


@Injectable({
  providedIn: 'root'
})
export class StripeService {

  private http = inject(HttpClient);
  private clientService = inject(ClientService);

  user!: Client;
  stripeUser!: any;

  purchaseDate = signal<number>(0);

  allSessions!: any;
  theListOfSessionsIds!: any;
  listItems!: any;

  constructor() { }

  charge(cantidad: any, tokenID: any) {
    return this.http.post(`${environment.apiURL}/stripe_checkout`, {
      stripeToken: tokenID,
      cantidad: cantidad
    }).toPromise();
  };


  charge2(source: any) {
    console.log('in service stripe CHARGE FRONT ==>');
    console.log(source);
    return this.http.post(`${environment.apiURL}/stripe_check`, {
      source: source
    });
  };

  createUser(user: any) {
    console.log('in service stripe FRONT ==>' + user);
    return this.http.post(`${environment.apiURL}/create_user`, {
      user: user
    });
  };

  cardTokenCharge(token: any, amount: any) {
    console.log(token);
    console.log(amount);
    return this.http.post(`${environment.apiURL}/cardTokenCharge`, {
      token: token,
      amount: amount
    });
  };

  tester() {
    return this.http.get(`${environment.apiURL}/test`);
  };

  getSessionCheckout(user: any, product: any, quantity: any, stripeShippingId: any, priceProductId: any) {
    return this.http.post(`${environment.apiURL}/create-checkout-session`, {
      user: user,
      product: product,
      quantity: quantity,
      stripeShippingId: stripeShippingId,
      priceProductId: priceProductId,
      californiaTaxId: environment.CALI_TAX_RATE
    });
  };

  getDirectLinkSessionCheckout(product: any, quantity: any, stripeShippingId1: any, stripeShippingId2: any, stripeShippingId3: any, priceProductId: any) {
    return this.http.post(`${environment.apiURL}/directlink-create-checkout-session`, {
      product: product,
      quantity: quantity,
      stripeShippingId1: stripeShippingId1,
      stripeShippingId2: stripeShippingId2,
      stripeShippingId3: stripeShippingId3,
      priceProductId: priceProductId,
      californiaTaxId: environment.CALI_TAX_RATE
    });
  };


  getPaimentsByUser(user: any) {
    return this.http.post(`${environment.apiURL}/payment_intents_by_user`, {
      user: user,
    });
  };

  retrieveUserTransactions(user: any) {
    return this.http.post(`${environment.apiURL}/payment_intents_by_user`, {
      user: user,
    });
  };

  async updateStripeUser(user: Client) {
    this.user = user;
    const firstNameStripe = this.user.firstname;
    const lastNameStripe = this.user.lastname;
    const fullnameStripe = firstNameStripe + ' ' + lastNameStripe;
    // console.log(this.user);
    const shippingForStripe = {
      address: {
        city: this.user.city,
        country: "US",
        line1: this.user.address,
        line2: this.user.addressExtra,
        postal_code: this.user.zipCode,
        state: this.user.state
      },
      name: fullnameStripe
    }
    const userStripeCreatedForStripe = {
      shipping: shippingForStripe
    };
    console.log('The user info for shippng in Stripe');

    const updatedUser$ = await this.http.post(`${environment.apiURL}/update_user`, {
      stripeId: this.user.stripeCustomerId,
      user: userStripeCreatedForStripe
    });
    this.stripeUser = await lastValueFrom(updatedUser$);
    this.user.stripeCustomerId = this.stripeUser.id;
  };

  // async updateUserAfterStripeCreation() {
  //   console.log("in update after stripe creation");
  //   // console.log(stripeUser);
  //   console.log(this.user);
  //   // const userForUpdate = this.user;
  //   // console.log(userForUpdate);

  //   this.clientService.updateOneUser(this.user, this.user.clientUID)
  // }

  getTimeLastOrder(epoch: number) {
    this.purchaseDate.set(epoch * 1000);
    // console.log(this.purchaseDate());
  };

  async getCustomerSessionHistory(user: any) {
    console.log(user);
    const stripeCustomerId = user.stripeCustomerId;
    console.log(stripeCustomerId);

    const allSessions$ = this.http.get(
      `${environment.apiURL}/customers/sessions/${stripeCustomerId}`);
    this.allSessions = await lastValueFrom(allSessions$);

    const theListOfSessionsIds = this.sessionListToListOfIds(this.allSessions);
    console.log(theListOfSessionsIds);

    this.sessionListToListOfIds(this.allSessions);

    const listItems$ = this.http.post(
      `${environment.apiURL}/sessions/products-in-session/`, theListOfSessionsIds);
      this.listItems = await lastValueFrom(listItems$);

    console.log(listItems$);
    console.log(this.listItems);

    return this.listItems
  }

  sessionListToListOfIds(allSessions: any) {
    const theListOfSessionsIds = allSessions
      .filter((session: { status: string; id: any; }) => session.status === 'complete')
      .map((session: { id: any; }) => session.id);
    return theListOfSessionsIds
  }

}
