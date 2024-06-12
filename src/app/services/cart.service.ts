import { Injectable, signal, computed } from '@angular/core';
import { Product } from '@models/product.model'
import { ProductCart } from '@models/product-cart.model'
import { Category } from '@models/category.model'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([]);
  totalAmount = computed(() => {
    const cart = this.cart();
    return cart.reduce((total, product) => total + product.price, 0);
  });

  totalItems = computed(() => {
    const cart = this.cart();
    return cart.reduce((total, product) => total + product.quantity, 0);
  })

  realCart = signal<Product[]>([]);

  constructor() { }

  addToCart(product: Product) {
    product.quantity = 1;
    if (this.cart().find(item => item.id === product.id)) {
      const myProductIndex = this.cart().findIndex(item => item.id === product.id)
      console.log(myProductIndex);
      this.cart.update((cart) => {
        return cart.map((item, position) => {
          if (position === myProductIndex) {
            return {
              ...item,
              quantity: item.quantity + 1,
              price: item.price + product.price
            }
          }
          else {
            return item
          }
        })
      })
    }
    else {
      console.log('No same product');
      this.cart.update(previousState => [...previousState, product]);
    };

    console.log(this.cart());
  }

}
