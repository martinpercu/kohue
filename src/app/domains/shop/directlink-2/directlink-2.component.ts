import { Component, inject } from '@angular/core';
import { NavbarsignedComponent } from '@shared/navbarsigned/navbarsigned.component';
import { FooterComponent } from '@shared/footer/footer.component';
import { Product } from '@models/product.model';

import { MonoproductService  } from '@services/monoproduct.service';

import { environment } from '@env/environment';

@Component({
  selector: 'app-directlink-2',
  standalone: true,
  imports: [NavbarsignedComponent, FooterComponent],
  templateUrl: './directlink-2.component.html',
  styleUrl: './directlink-2.component.css'
})
export class Directlink2Component {

  private monoproductService = inject(MonoproductService);

  monoproduct: Product;

  constructor() {
    this.monoproduct = this.monoproductService.returnMonoproduct();
    // console.log(this.monoproduct);
  };

  toCheckoutLink() {
    let checkoutUrl = environment.ASSOCIATE_PAYMENT_LINK;
    window.location.href = checkoutUrl;
  }


}
