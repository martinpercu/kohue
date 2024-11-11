import { Injectable, inject } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class StripeService {

  private http = inject(HttpClient);

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
  }

}
