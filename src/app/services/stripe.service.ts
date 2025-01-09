import { Injectable, inject } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
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

  constructor() { }

  charge(cantidad:any, tokenID:any) {
    return this.http.post(`${environment.apiURL}/stripe_checkout`, {
      stripeToken: tokenID,
      cantidad: cantidad
    }).toPromise();
  };


  charge2(source:any) {
    console.log('in service stripe CHARGE FRONT ==>' );
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

  getSessionCheckout(user: any, product:any, quantity:any) {
    return this.http.post(`${environment.apiURL}/create-checkout-session`, {
      user: user,
      product: product,
      quantity: quantity
    });
  };


  getPaimentsByUser(user: any) {
    return this.http.post(`${environment.apiURL}/payment_intents_by_user`, {
      user: user,
    });
  };

  async updateStripeUser(user: Client) {
    this.user = user;
    const firstNameStripe = this.user.firstname;
    const lastNameStripe = this.user.lastname;
    const fullnameStripe = firstNameStripe + ' ' + lastNameStripe;
    console.log(this.user);
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
    console.log(userStripeCreatedForStripe);

    const updatedUser$ = await this.http.post(`${environment.apiURL}/update_user`, {
      stripeId: this.user.stripeCustomerId,
      user: userStripeCreatedForStripe
    });
    this.stripeUser = await lastValueFrom(updatedUser$);


    // const stripeUser$ = await this.createUser(userStripeCreatedForStripe);
    // this.stripeUser = await lastValueFrom(stripeUser$);
    // console.log(updatedUser$);
    console.log(this.stripeUser);
    console.log(this.user);
    this.user.stripeCustomerId = this.stripeUser.id;
    console.log(this.user);


    // console.log(userStripeCreatedForStripe);
    // this.updateUserAfterStripeCreation();
  };

  // async updateUserAfterStripeCreation() {
  //   console.log("in update after stripe creation");
  //   // console.log(stripeUser);
  //   console.log(this.user);
  //   // const userForUpdate = this.user;
  //   // console.log(userForUpdate);

  //   this.clientService.updateOneUser(this.user, this.user.clientUID)
  // }

}
