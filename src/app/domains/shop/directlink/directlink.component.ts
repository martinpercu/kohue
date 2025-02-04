import { Component, Output, EventEmitter, signal, inject } from '@angular/core';
import { NavbarsignedComponent } from '@shared/navbarsigned/navbarsigned.component';
import { Product } from '@models/product.model';

import { CartService  } from '@services/cart.service';
import { MonoproductService  } from '@services/monoproduct.service';

import { environment } from '@env/environment'

@Component({
  selector: 'app-directlink',
  standalone: true,
  imports: [NavbarsignedComponent],
  templateUrl: './directlink.component.html',
  styleUrl: './directlink.component.css'
})
export class DirectlinkComponent {

  // private cartService = inject(CartService);
  private monoproductService = inject(MonoproductService);

  monoproduct: Product;

  constructor() {
    this.monoproduct = this.monoproductService.returnMonoproduct();
    // console.log(this.monoproduct);
  };

  toCheckoutLink() {
    let checkoutUrl = environment.PAYMENT_LINK;
    window.location.href = checkoutUrl;
  }

}
