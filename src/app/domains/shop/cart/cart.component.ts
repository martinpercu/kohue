import { Component, inject, signal, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Product } from '@models/product.model';

import { CartService } from '@services/cart.service';
import { ShippingService } from '@services/shipping.service';


import { ShippingmethodComponent } from '@shop/shippingmethod/shippingmethod.component';



@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ShippingmethodComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  @Output() cartOnOff = new EventEmitter();

  private cartService = inject(CartService);
  private shippingService = inject(ShippingService);

  showCart: boolean = true;


  // hideSideMenu = signal(false);


  cart = this.cartService.cart;
  subTotalAmount = this.cartService.subTotalAmount;
  totalItems = this.cartService.totalItems;

  shippingAmount = this.cartService.shippingAmount;
  shippingText = this.cartService.shippingText;

  totalAmount = this.cartService.totalAmount;

  // shippingText!: string;

  product!: Product;



  toggleSideMenuFromCart() {
    console.log(' 1 st in cart showCart==>  ' + this.showCart);
    this.showCart = !this.showCart;
    console.log(' 2nd in cart showCart==>  ' + this.showCart);
    this.cartOnOff.emit(this.showCart);
  };

  subtractOneFromCart(product: Product) {
    this.cartService.substractOneItem(product);
    this.checkIfNoItemes();
    console.log(this.shippingAmount());
  };

  addOneFromCart(product: Product) {
    this.cartService.addToCartFromCart(product);
  };

  removeProduct(product: Product) {
    this.cartService.removeFullItem(product);
    this.checkIfNoItemes();
    console.log(this.shippingAmount());
  };

  checkIfNoItemes() {
    if (this.totalItems() == 0) {
      this.shippingAmount.set(0);
    } else {
      console.log('still items in cart');
    }
  };
}
