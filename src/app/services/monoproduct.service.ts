import { Injectable } from '@angular/core';

import { Product } from '@models/product.model'

@Injectable({
  providedIn: 'root'
})
export class MonoproductService {


  monoproduct: Product = {
    id: 24,
    title: "2021 Kohue Cabernet Sauvignon",
    subtitle: "UCO VALLEY, MENDOZA",
    titleCart: "2021 Kohue Cabernet Sauvignon 3-Pack",
    specsheet: "cabernet-2021-tech.pdf",
    price: 435,
    imageMobile: "./../../../../assets/img/Cabernet-2021-Mobile.png",
    imageDesktop: "./../../../../assets/img/Cabernet-2021-Desktop.png",
    imageAll: "./../../../../assets/img/6-cabernet.jpg",
    description: "Case of 3 bottles (750ml)",
    description_a: "This Cabernet Sauvignon, sourced from a rocky 2-acre vineyard plot in the renowned appellation of Paraje Altamira, captures the essence of high- altitude terroir, alluvial soils, and a dry microclimate, imparting exceptional elegance, depth, structure and complexity.",
    description_b: "Distinct notes of ripe blackberry, blueberry, sweet herbs, white chocolate and graphite shape this expressive wine. Bold yet refined, its silky tannins and vibrant tension carry through to a long, lingering finish.",
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
    subtitle: "UCO VALLEY, MENDOZA",
    titleCart: "2021 Kohue Malbec 3-Pack",
    specsheet: "malbec-2021-tech.pdf",
    price: 555,
    imageMobile: "./../../../../assets/img/Botella-Kohue-2024-Mobile.png",
    imageDesktop: "./../../../../assets/img/Botella-Kohue-2024-Desktop.png",
    description: "Case of 3 bottles (750ml)",
    description_a: "The Kohue Malbec 2021 reflects the unique character of this over 60-year- old vineyard plot with remarkable depth and elegance. Full-bodied and sensual, it’s framed by refined, silky tannins and a delicate, endless finish. This wine is beautifully balanced and set to age gracefully over the decades.",
    description_b: ".",
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
