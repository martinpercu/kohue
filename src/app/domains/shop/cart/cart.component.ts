import { Component, inject, signal, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Product } from '@models/product.model';

import { CartService } from '@services/cart.service';
import { ShippingService } from '@services/shipping.service';


import { ShippingmethodComponent } from '@shop/shippingmethod/shippingmethod.component';

import { MonoproductService } from '@services/monoproduct.service';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ShippingmethodComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  @Output() cartOff = new EventEmitter();
  @Output() wineOff = new EventEmitter();
  @Output() stripeOn = new EventEmitter();


  @Output() stripeOnCartOn = new EventEmitter<{stripeOn:any, cartOn:any}>();


  private cartService = inject(CartService);
  private shippingService = inject(ShippingService);
  private monoproductService = inject(MonoproductService);

  showCart: boolean = true;
  showCartInNav: boolean = true;
  showCartInLand: boolean = false;


  // hideSideMenu = signal(false);


  cart = this.cartService.cart;
  subTotalAmount = this.cartService.subTotalAmount;
  totalItems = this.cartService.totalItems;

  shippingAmount = this.cartService.shippingAmount;
  shippingText = this.cartService.shippingText;

  totalAmount = this.cartService.totalAmount;

  // shippingText!: string;

  product!: Product;



  closeCart() {
    // console.log(' 1 st in cart showCart==>  ' + this.showCart);
    // this.showCart = false;
    // console.log(' 2nd in cart showCart==>  ' + this.showCart);
    // this.cartOff.emit(this.showCart);
    this.stripeOnCartOn.emit({stripeOn:null, cartOn:false});
  };

  subtractOneFromCart(product: Product) {
    this.cartService.substractOneItem(product);
    this.checkIfNoItemes();
    console.log(this.shippingAmount());
  };

  addOneFromCart(product: Product) {
    this.cartService.addToCartFromCart(product);
  };

  addOneFromCartFromZero() {
    this.product = this.monoproductService.returnMonoproduct();
    console.log(this.product);
    this.cartService.addToCart(this.product);
  };

  removeProduct(product: Product) {
    this.cartService.removeFullItem(product);
    this.checkIfNoItemes();
    console.log(this.shippingAmount());
    this.closeCart();
  };

  checkIfNoItemes() {
    if (this.totalItems() == 0) {
      this.shippingAmount.set(0);
    } else {
      console.log('still items in cart');
    }
  };

  toggleCartOnNav() {
    console.log(' 1 st in cart showCart==>  ' + this.showCartInNav);
    this.showCartInNav = !this.showCartInNav;
    console.log(' 2nd in cart showCart==>  ' + this.showCartInNav);
    // this.cartInLandOnOff.emit(this.showCartInNav);
    // this.closeCart();
  };

  stripeOnHandler() {
    this.stripeOn.emit(true);
  }

  stripeOnAndAlsoCartOn() {
    console.log('from child FUULLL');
    this.stripeOnCartOn.emit({stripeOn:true, cartOn:true});
  }

  checkoutToggleCartToLand() {
    this.stripeOnAndAlsoCartOn;

    console.log(' 1 st in cart showCartInLand==>  ' + this.showCartInLand);
    this.showCartInLand = true;
    this.showCartInNav = false;
    console.log(' 2nd in cart showCartInLand==>  ' + this.showCartInLand);
    console.log(' cart showCartInNav==>  ' + this.showCartInNav);
    // this.cartInLandOnOff.emit(this.showCartInLand);
    // this.toggleCartOnNav();
    // this.closeCart();
    console.log('At this point start getting payment from client');
    // this.stripeOnHandler();
    this.stripeOnAndAlsoCartOn();
  };

  alertAddShippingMethod() {
    alert('Please choose a shipping method');
  }
}
