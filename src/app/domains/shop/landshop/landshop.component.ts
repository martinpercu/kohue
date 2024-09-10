import { Component, inject } from '@angular/core';
import { EditComponent } from '@users/edit/edit.component';
import { NavbarsignedComponent } from '@shared/navbarsigned/navbarsigned.component';
import { MonoproductComponent } from '@shop/monoproduct/monoproduct.component';
import { ShippingmethodComponent } from '@shop/shippingmethod/shippingmethod.component';
import { CartComponent } from '@shop/cart/cart.component';
import { CardStripeComponent } from '@shop/card-stripe/card-stripe.component';
import { FooterComponent } from '@shared/footer/footer.component';

import { StaytunedComponent } from '@shop/staytuned/staytuned.component';
import { StripeService } from '@services/stripe.service';
import { lastValueFrom } from 'rxjs';

import { AuthService } from '@services/auth.service';
import { ClientService } from '@services/client.service';

import { Client } from '@models/client.model'



@Component({
  selector: 'app-landshop',
  standalone: true,
  imports: [EditComponent, NavbarsignedComponent, FooterComponent, MonoproductComponent, ShippingmethodComponent, CartComponent, CardStripeComponent, StaytunedComponent],
  templateUrl: './landshop.component.html',
  styleUrl: './landshop.component.css'
})
export class LandshopComponent {

  private stripeService = inject(StripeService);
  private auth = inject(AuthService);
  private clientService = inject(ClientService);

  showWine!: boolean;
  showEditAccount: boolean = true;

  showCart: boolean = false
  showCartInLand!: boolean;

  showStripeAndCart: boolean = false;

  showStayTune: boolean = false;

  private userId!: any;
  user!: Client;
  stripeUser!: any;
  test!: any;


  constructor() {
    this.showStayTune = false;
    this.showWine = false;
    const id = this.auth.getUserUid();
    if (id) {
      this.userId = id
      console.log('IN CART nav user ID', this.userId);
      // this.getUser()
    };
    console.log(this.user);

  }

  async ngOnInit() {
    // console.log(this.user.stripeCustomerId);
    this.user = await this.clientService.getOneUser(this.userId);
    this.knowIfUserHasBuyed();

  };


  fromNavbarMonoproduct(event: boolean) {
    this.showWine = event;
  };

  fromNavbarInLand(event: boolean) {
    this.showCartInLand = event
  };

  fromNavbarAccount(event: boolean) {
    this.showEditAccount = event
  };

  fromNavbarCart(event: boolean) {
    console.log(event);
    this.showCart = event
  };

  fromNavbarCartStripe(event: boolean) {
    console.log(event);
    this.showStripeAndCart = event
  };

  fromCartToCheckout(event: boolean) {
    console.log(event);
    this.showCartInLand = event
  };

  fromProduct(event: boolean) {
    console.log(event);
    console.log("this.showCart  ==>  ", event);
    this.showCart = event;
    console.log(event);
    console.log("qsdfqdfqsdf");
  };

  fromProductCloserMonoproduct(event: boolean) {
    console.log(event);
    this.showWine = false
  };

  fromNavbarAccountHandler(event: boolean) {
    console.log(event);
    console.log("qsdfqdfqsdf");
    this.showEditAccount = event;
    console.log(event);
    console.log("qsdfqdfqsdf");
  };

  fromNavbarStripeAndCart(data: any) {
    console.log(data);
    if(data.cartOn != null) {
      console.log('in cartOn so not null');
      this.showCart = data.cartOn;
    }
    if(data.stripeOn != null) {
      console.log('in stripeOn so not null');
      this.showStripeAndCart = data.stripeOn;
    };
    this.showWine = false;
  };

  fromNavbarAndStayTuned(data: any) {
    console.log(data);
    this.showStayTune = data
  };


  async knowIfUserHasBuyed() {
    const user = this.user;
    console.log(user);

    const test$ = this.stripeService.tester2(user);
    this.test = await lastValueFrom(test$);
    console.log(test$);
    console.log(this.test);
    const compra = this.test.data.length;
    console.log(compra);
    if (compra == 0) {
      console.log("no tiene compras");
      this.showWine = true
    }
    else {
      console.log('Este ya compró');
      this.showWine = false;
      // alert('Este compró');
    }
  }




}
