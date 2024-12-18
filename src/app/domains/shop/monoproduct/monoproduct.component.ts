import { Component, Output, EventEmitter, signal, inject } from '@angular/core';
import { NavbarsignedComponent } from '@shared/navbarsigned/navbarsigned.component';
import { Product } from '@models/product.model';

import { CartService  } from '@services/cart.service';
import { MonoproductService  } from '@services/monoproduct.service';

@Component({
  selector: 'app-monoproduct',
  standalone: true,
  imports: [NavbarsignedComponent],
  templateUrl: './monoproduct.component.html',
  styleUrl: './monoproduct.component.css'
})
export class MonoproductComponent {

  cart = signal<Product[]>([]);

  private cartService = inject(CartService);
  private monoproductService = inject(MonoproductService);


  @Output() cartOnOff = new EventEmitter();
  @Output() monoproductOff = new EventEmitter();


  monoproduct: Product;

  // @Output() addToCart = new EventEmitter();

  constructor() {
    this.monoproduct = this.monoproductService.returnMonoproduct();
    console.log(this.monoproduct);

   }

  addToCartHandler() {
    console.log('clicking from the child');
    // this.addToCart.emit('este produto goes to the cart ==> ' + this.product.title + "\n" + "this is the price ===> " + this.product.price);
    // this.addToCart.emit(this.monoproduct);
    this.cartService.addToCart(this.monoproduct);
    this.showTheCart();
    this.monoproductShowOff();
  };

  showTheCart() {
    this.cartOnOff.emit(true);
  }

  monoproductShowOff() {
    this.monoproductOff.emit(false);
  }

}
