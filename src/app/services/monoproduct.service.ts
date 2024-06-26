import { Injectable } from '@angular/core';

import { Product } from '@models/product.model'

@Injectable({
  providedIn: 'root'
})
export class MonoproductService {


  monoproduct: Product = {
    id: 22,
    title: "Tri-pack Kohue Wine Malbec 2021",
    price: 435,
    image: "./../../../../assets/img/Botella-Kohue-2021-small.png",
    description: "Terrebile vinagre va como trompada de mono",
    images: ["./../../../../assets/img/Botella-Kohue-2021-small.png", "./../../../../assets/img/Botella-Kohue-2021-small.png"],
    category: {
      id: 100,
      name: "Wines"
    },
    quantity: 1
  };

  constructor() {
   }

  returnMonoproduct() {
    return this.monoproduct
  }
}
