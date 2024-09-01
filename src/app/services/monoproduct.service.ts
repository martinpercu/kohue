import { Injectable } from '@angular/core';

import { Product } from '@models/product.model'

@Injectable({
  providedIn: 'root'
})
export class MonoproductService {


  monoproduct: Product = {
    id: 22,
    title: "Tri pack Kohue Wine Malbec 2023",
    price: 430,
    image: "./../../../../assets/img/vino-botella.png",
    description: "Terrebile vinagre va como trompada de mono",
    images: ["./../../../../assets/img/vino-botella.png", "./../../../../assets/img/vino-botella.png"],
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
