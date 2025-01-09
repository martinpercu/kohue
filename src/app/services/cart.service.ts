import { Injectable, signal, computed, inject } from '@angular/core';
import { Product } from '@models/product.model';
import { ProductCart } from '@models/product-cart.model';
import { Category } from '@models/category.model';

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

  shippingAmount = signal<number>(0);
  shippingText = signal<string>('');

  totalAmount = computed(() => this.subTotalAmount() + this.shippingAmount());

  constructor() { }

  addToCart(product: Product) {
    console.log(this.cart().find(x => x.quantity === 4));
  // The under (if) allow only to add if the quantity is 4 or less
  // This is to prevent add to cart from the LandShop - Monoproduct
    if (!this.cart().find(x => x.quantity >= 4)) {
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
    };
    console.log(this.cart());
  };

  addToCartFromCart(product: Product) {
    const pricePerUnit = product.price / product.quantity;
    if (this.cart().find(item => item.id === product.id)) {
      const myProductIndex = this.cart().findIndex(item => item.id === product.id)
      console.log(myProductIndex);
      this.cart.update((cart) => {
        return cart.map((item, position) => {
          if (position === myProductIndex) {
            return {
              ...item,
              quantity: item.quantity + 1,
              price: item.price + pricePerUnit
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

  substractOneItem(product: Product) {
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

  removeFullItem(product: Product) {
    // const pricePerUnit = product.price / product.quantity;
    // console.log(pricePerUnit);
    const myProductIndex = this.cart().findIndex(item => item.id === product.id)
    console.log(myProductIndex);
    this.cart.update((cart) => {
      return cart.map((item, position) => {
        if (position === myProductIndex) {
          return {
            ...item,
            quantity: item.quantity - product.quantity,
            price: item.price - product.price
          }
        }
        else {
          return item
        }
      })
    })
    console.log(this.cart());
  };



  setShippingAmount(guita: number) {
    this.shippingAmount.set(guita);
    console.log(this.shippingAmount());
  };

  setShippingText(text: string) {
    this.shippingText.set(text);
    console.log(this.shippingText());
  }


}
