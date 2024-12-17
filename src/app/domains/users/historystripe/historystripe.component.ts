import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { StripeService } from '@services/stripe.service';

import { AuthService } from '@services/auth.service';
import { ClientService } from '@services/client.service';

import { Client } from '@models/client.model';
import { StripeOrderModel } from '@models/stripeorder.model';


@Component({
  selector: 'app-historystripe',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './historystripe.component.html',
  styleUrl: './historystripe.component.css',
  // providers: [DatePipe]
})
export class HistorystripeComponent {

  private stripeService = inject(StripeService);
  private auth = inject(AuthService);
  private clientService = inject(ClientService);


  private userId!: any;
  user!: Client;

  stripeOrder!: StripeOrderModel;
  // stripeOrders!: [StripeOrderModel];
  stripeOrders!: any;



  constructor() {
    const id = this.auth.getUserUid();
    if (id) {
      this.userId = id
      // console.log('IN CART nav user ID', this.userId);
      // this.getUser()
    };
  }

  async ngOnInit() {
    this.user = await this.clientService.getOneUser(this.userId);
    if (this.user.stripeCustomerId == 'none') {
      console.log('NO StripeCustomer ID');
    }
    else {
      console.log('this user has StripeCustomer ID');
      this.getStripeOrders();
    }
  };

  async getStripeOrders() {
    this.stripeOrders = await this.stripeService.getCustomerSessionHistory(this.user);
    console.log(this.stripeOrders);

  };


  // fromNavbarMonoproduct(event: boolean) {
  //   this.showWine = event;
  // };

}
