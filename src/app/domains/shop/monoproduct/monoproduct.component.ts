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


  monoproduct: Product;
  //  = {
  //   id: 22,
  //   title: "Tri pack Kohue Wine Malbec 2023",
  //   price: 430,
  //   image: "./../../../../assets/img/vino-botella.png",
  //   description: "Terrebile vinagre va como trompada de mono",
  //   images: ["./../../../../assets/img/vino-botella.png", "./../../../../assets/img/vino-botella.png"],
  //   category: {
  //     id: 100,
  //     name: "Wines"
  //   },
  //   quantity: 1
  // };

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
  };

  showTheCart() {
    this.cartOnOff.emit(true);
  }

}
