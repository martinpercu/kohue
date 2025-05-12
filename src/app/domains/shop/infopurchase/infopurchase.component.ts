import { Component, inject } from '@angular/core';
import { StripeService } from '@services/stripe.service';
import { DatePipe } from '@angular/common';
import { Client } from '@models/client.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-infopurchase',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './infopurchase.component.html',
  styleUrl: './infopurchase.component.css'
})
export class InfopurchaseComponent {

  router = inject(Router);

  private stripeService = inject(StripeService);

  purchaseDate = this.stripeService.purchaseDate;


  closeSucces() {
    this.router.navigate(['members'])
  }


}
