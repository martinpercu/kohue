import { Injectable, signal, computed } from '@angular/core';
import { Product } from '@models/product.model'
import { ProductCart } from '@models/product-cart.model'
import { Category } from '@models/category.model'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([]);

  subTotalAmount = computed(() => {
    const cart = this.cart();
    return cart.reduce((total, product) => total + product.price, 0);
  });

  totalItems = computed(() => {
    const cart = this.cart();
    return cart.reduce((total, product) => total + product.quantity, 0);
  });

  shipping = signal<number>(150);
  shippingAmount = signal<number>(150);

  totalAmount = computed(() => this.subTotalAmount() + this.shipping())



  // shippingAmount = computed(() => this.subTotalAmount + this.shipping);

  x = signal(5);
  y = signal(3);
  z = computed(() => this.x() + this.y());
  // console.log(z()); // 8


  // totalAmount = (this.shippingAmount + this.subTotalAmount);

  // realCart = signal<Product[]>([]);

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
  };

  removeOneItem(product: Product) {
    const pricePerUnit = product.price / product.quantity;
    console.log(pricePerUnit);
      const myProductIndex = this.cart().findIndex(item => item.id === product.id)
      console.log(myProductIndex);
      this.cart.update((cart) => {
        return cart.map((item, position) => {
          if (position === myProductIndex) {
            return {
              ...item,
              quantity: item.quantity - 1,
              price: item.price - pricePerUnit
            }
          }
          else {
            return item
          }
        })
      })
    console.log(this.cart());
  };

  addShippingMethod() {

  }

}
