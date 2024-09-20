import { Component, inject } from '@angular/core';
import { StripeService } from '@services/stripe.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-infopurchase',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './infopurchase.component.html',
  styleUrl: './infopurchase.component.css'
})
export class InfopurchaseComponent {

  private stripeService = inject(StripeService);



  purchaseDate = this.stripeService.purchaseDate;

}
