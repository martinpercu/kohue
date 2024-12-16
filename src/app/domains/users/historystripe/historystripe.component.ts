import { Component, inject } from '@angular/core';
import { StripeService } from '@services/stripe.service';

import { AuthService } from '@services/auth.service';
import { ClientService } from '@services/client.service';

import { Client } from '@models/client.model';


@Component({
  selector: 'app-historystripe',
  standalone: true,
  imports: [],
  templateUrl: './historystripe.component.html',
  styleUrl: './historystripe.component.css'
})
export class HistorystripeComponent {

  private stripeService = inject(StripeService);
  private auth = inject(AuthService);
  private clientService = inject(ClientService);


  private userId!: any;
  user!: Client;



  constructor() {
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
      console.log('NO StripeCustomer ID');

    }
    else {
      console.log('this user has StripeCustomer ID');
    }
  };

  async testHistory() {
    alert('dfssdf');
    const customerSessionHistory = await this.stripeService.getCustomerSessionHistory(this.user);
    console.log(customerSessionHistory);

  };


  // fromNavbarMonoproduct(event: boolean) {
  //   this.showWine = event;
  // };

}
