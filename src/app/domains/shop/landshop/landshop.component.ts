import { Component, inject } from '@angular/core';
import { EditComponent } from '@users/edit/edit.component';
import { NavbarsignedComponent } from '@shared/navbarsigned/navbarsigned.component';
import { MonoproductComponent } from '@shop/monoproduct/monoproduct.component';
import { ShippingmethodComponent } from '@shop/shippingmethod/shippingmethod.component';
import { CartComponent } from '@shop/cart/cart.component';
import { CardStripeComponent } from '@shop/card-stripe/card-stripe.component';
import { FooterComponent } from '@shared/footer/footer.component';
import { InfopurchaseComponent } from '@shop/infopurchase/infopurchase.component';

import { StaytunedComponent } from '@shop/staytuned/staytuned.component';
import { StripeService } from '@services/stripe.service';
import { lastValueFrom } from 'rxjs';

import { AuthService } from '@services/auth.service';
import { ClientService } from '@services/client.service';
import { ShopService } from '@services/shop.service';
import { EmailService } from '@services/email.service';

import { Client } from '@models/client.model'
// import { DatePipe } from '@angular/common';

import { HistorystripeComponent } from '@users/historystripe/historystripe.component';

import { ThanksInterestModalComponent } from '@shop/thanks-interest-modal/thanks-interest-modal.component';

import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-landshop',
  standalone: true,
  imports: [EditComponent, NavbarsignedComponent, FooterComponent, MonoproductComponent, ShippingmethodComponent, CartComponent, CardStripeComponent, StaytunedComponent, InfopurchaseComponent, HistorystripeComponent, ThanksInterestModalComponent, DatePipe],
  templateUrl: './landshop.component.html',
  styleUrl: './landshop.component.css'
})
export class LandshopComponent {

  private stripeService = inject(StripeService);
  private auth = inject(AuthService);
  private clientService = inject(ClientService);
  private shopService = inject(ShopService);
  private emailsender = inject(EmailService)

  showWine!: boolean;
  showEditAccount: boolean = true;

  showCart: boolean = false
  showCartInLand!: boolean;

  showStripeAndCart: boolean = false;

  showStayTune!: boolean;

  showThanksForInterest!: boolean;


  private userId!: any;
  user!: Client;
  stripeUser!: any;
  test!: any;
  intentsByUser!: any;

  testRetrieve!: any;

  // purchaseDate!: number;
  // purchaseDate = this.stripeService.purchaseDate;

  showPurchase = this.shopService.showPurchase;

  subMenuChoice: string = 'dash';


  stripeOrders!: any;




  constructor() {
    this.showStayTune = false;
    this.showThanksForInterest = false;

    // this.showWine = true;
    const id = this.auth.getUserUid();
    if (id) {
      this.userId = id
      // console.log('IN CART nav user ID', this.userId);
      // this.getUser()
    };
  }

  async ngOnInit() {
    // console.log(this.user.stripeCustomerId);
    this.user = await this.clientService.getOneUser(this.userId);
    // console.log(this.user);

    if (this.user.stripeCustomerId == 'none') {
      this.showWine = true
    }
    else {
      this.knowIfUserHasBuyed();
    }
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
    // console.log("this.showCart  ==>  ", event);
    this.showCart = event;
    // console.log(event);
    // console.log("qsdfqdfqsdf");
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
    if (data.cartOn != null) {
      console.log('in cartOn so not null');
      this.showCart = data.cartOn;
    }
    if (data.stripeOn != null) {
      console.log('in stripeOn so not null');
      this.showStripeAndCart = data.stripeOn;
    };
    this.showWine = false;
  };

  fromNavbarAndStayTuned(data: any) {
    console.log(data + ' this is staytuned status');
    this.showStayTune = data
  };

  fromThanksForInterest(data: any) {
    console.log(data + ' this is Thanks for Interest status');
    this.showThanksForInterest = data
  }

  fromProductShowThanks(data: any) {
    console.log(data + 'from monoproduct thanks for Interest status');
    this.showThanksForInterest = data
    console.log(this.user.email + "en fromProductShowThanks");
    if (this.user.email) {
      this.emailsender.sendEmailInterested(this.user);
      console.log('dentro del if');
    }
  }


  async knowIfUserHasBuyed() {
    const user = this.user;
    console.log('the user to know if already buyed');
    console.log(user);

    const paymentIntentsByUser$ = this.stripeService.getPaimentsByUser(user);
    this.intentsByUser = await lastValueFrom(paymentIntentsByUser$);
    // console.log(paymentIntentsByUser$);
    console.log(this.intentsByUser);
    // const data = this.intentsByUser.data
    // console.log(this.intentsByUser.data[0].created);
    // console.log(data[0]);


    const dataLength = this.intentsByUser.data.length;
    // console.log(dataLength);
    // console.log("User data Lenght from Stripe");
    if (dataLength == 0) {
      console.log("no buys");
      this.showWine = true
    }
    else {
      console.log('This guy already buyed something');
      this.showWine = false;
      const epoch = this.intentsByUser.data[0].created;
      this.stripeService.getTimeLastOrder(epoch);
      this.shopService.handlerShowPurchase(true);

      this.stripeOrders = await this.stripeService.getCustomerSessionHistory(this.user);
      console.log(this.stripeOrders);

    }
  }

  // getTimeLastOrder(epoch: any) {
  //   this.purchaseDate = epoch*1000;
  // }

  setSubMenuChoice(value: string) {
    this.subMenuChoice = value;
  }




}
