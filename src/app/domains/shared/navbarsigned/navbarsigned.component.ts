import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Router } from '@angular/router';

import { CartService  } from '@services/cart.service';

import { Product } from '@models/product.model';
import { ShippingmethodComponent } from '@shop/shippingmethod/shippingmethod.component';



@Component({
  selector: 'app-navbarsigned',
  standalone: true,
  imports: [ShippingmethodComponent],
  templateUrl: './navbarsigned.component.html',
  styleUrl: './navbarsigned.component.css'
})
export class NavbarsignedComponent {

  @Output() showMonoproduct = new EventEmitter();
  @Output() cartOnOff = new EventEmitter();

  private router = inject(Router);
  private cartService = inject(CartService);

  // hideSideMenu = signal(true);
  showWine = true;
  // showCart = false;

  cart = this.cartService.cart;
  subTotalAmount = this.cartService.subTotalAmount;
  totalItems = this.cartService.totalItems;


  shippingAmount = this.cartService.shippingAmount;

  totalAmount = this.cartService.totalAmount;

  product!: Product;


  toggleSideMenu() {
    // this.showCart = true;
    if(this.totalItems() > 0) {
      this.cartOnOff.emit(true);
    } else {
      console.log('not change status no items');
    };
    // if(this.totalItems() > 0) {
    //   this.hideSideMenu.update(previousState => !previousState);
    //   this.cartOnOff.emit(this.hideSideMenu);
    // } else {
    //   console.log('not change status no items');
    // };
  }

  // toggleSideMenuFromCart() {
  //     this.hideSideMenu.update(previousState => !previousState)
  // }

  navToHome() {
    this.router.navigate(['test'])
  };

  navEdit() {
    this.router.navigate(['members'])
  };

  navAcquire() {
    this.router.navigate(['acquire'])
  };

  // navBuywine() {
  //   this.router.navigate(['members']);
  // };

  showWines() {
    // this.router.navigate(['mono']);
    this.showWine = !this.showWine;
    console.log('en nav' + "  " + this.showWine);
    this.showMonoproduct.emit(this.showWine);
  };

  // removeFromCart(product: Product) {
  //   this.cartService.removeOneItem(product);
  // }

}
