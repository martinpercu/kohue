import { Injectable } from '@angular/core';

import { Product } from '@models/product.model'

@Injectable({
  providedIn: 'root'
})
export class MonoproductService {


  monoproduct: Product = {
    id: 24,
    title: "2021 Kohue Cabernet Sauvignon",
    titleCart: "2021 Kohue Cabernet Sauvignon 3-Pack",
    price: 435,
    imageMobile: "./../../../../assets/img/Cabernet-2021-Mobile.png",
    imageDesktop: "./../../../../assets/img/Cabernet-2021-Desktop.png",
    description: "Case of 3 bottles (750ml)",
    images: ["./../../../../assets/img/Botella-Kohue-2021-small.png", "./../../../../assets/img/Botella-Kohue-2021-small.png"],
    category: {
      id: 100,
      name: "Wines"
    },
    quantity: 1
  };

  monoproduct_malbec: Product = {
    id: 22,
    title: "2021 Kohue Malbec",
    titleCart: "2021 Kohue Malbec 3-Pack",
    price: 555,
    imageMobile: "./../../../../assets/img/Botella-Kohue-2024-Mobile.png",
    imageDesktop: "./../../../../assets/img/Botella-Kohue-2024-Desktop.png",
    description: "Case of 3 bottles (750ml)",
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
  returnMonoproduct_old() {
    return this.monoproduct_malbec
  }
}
