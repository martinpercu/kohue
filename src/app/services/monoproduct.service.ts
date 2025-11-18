import { Injectable } from '@angular/core';

import { Product } from '@models/product.model'

@Injectable({
  providedIn: 'root'
})
export class MonoproductService {


  monoproduct: Product = {
    id: 28,
    title: "2022 Kohue Malbec",
    subtitle: "UCO VALLEY, MENDOZA",
    titleCart: "2022 Kohue Malbec",
    specsheet: "malbec-2022-tech.pdf",
    price: 185,
    imageMobile: "./../../../../assets/img/Cabernet-2021-Mobile.png",
    imageDesktop: "./../../../../assets/img/Cabernet-2021-Desktop.png",
    imageAll: "./../../../../assets/img/8-malbec-2022.jpg",
    // imageAll: "./../../../../assets/img/8-test.jpg",
    description: "Bottle 750ml",
    description_a: "The 2022 season brought overall cool conditions, yielding Malbecs with ideal acidity, excellent phenolic development, and a concentrated aromatic profile with remarkable aging potential.",
    description_b: "This classic Malbec is delicate and pure, revealing layers of red and black fruit, balanced by savory notes of graphite and minerality, giving the wine depth and complexity that reflect the authenticity of its site.",
    images: ["./../../../../assets/img/Botella-Kohue-2021-small.png", "./../../../../assets/img/Botella-Kohue-2021-small.png"],
    category: {
      id: 131,
      name: "Wines"
    },
    quantity: 1
  };

  // This is the 3PACK Malbec 2022
  monoproduct_old_3_Pack_Malbec_2022: Product = {
    id: 26,
    title: "2022 Kohue Malbec",
    subtitle: "UCO VALLEY, MENDOZA",
    titleCart: "2022 Kohue Malbec 3-Pack",
    specsheet: "malbec-2022-tech.pdf",
    price: 450,
    imageMobile: "./../../../../assets/img/Cabernet-2021-Mobile.png",
    imageDesktop: "./../../../../assets/img/Cabernet-2021-Desktop.png",
    imageAll: "./../../../../assets/img/8-malbec-2022.jpg",
    // imageAll: "./../../../../assets/img/8-test.jpg",
    description: "Case of 3 bottles (750ml)",
    description_a: "The 2022 season brought overall cool conditions, yielding Malbecs with ideal acidity, excellent phenolic development, and a concentrated aromatic profile with remarkable aging potential.",
    description_b: "This classic Malbec is delicate and pure, revealing layers of red and black fruit, balanced by savory notes of graphite and minerality, giving the wine depth and complexity that reflect the authenticity of its site.",
    images: ["./../../../../assets/img/Botella-Kohue-2021-small.png", "./../../../../assets/img/Botella-Kohue-2021-small.png"],
    category: {
      id: 126,
      name: "Wines"
    },
    quantity: 1
  };


  monoproduct_cabernet: Product = {
    id: 24,
    title: "2021 Kohue Cabernet Sauvignon",
    subtitle: "UCO VALLEY, MENDOZA",
    titleCart: "2021 Kohue Cabernet Sauvignon 3-Pack",
    specsheet: "cabernet-2021-tech.pdf",
    price: 555,
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
    description_a: "The Kohue Malbec 2021 reflects the unique character of this over 60-year- old vineyard plot with remarkable depth and elegance. Full-bodied and sensual, it’s framed by refined, silky tannins and a delicate, endless finish.",
    description_b: "This wine is beautifully balanced and set to age gracefully over the decades.",
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
  returnMonoproduct_cabernet_2021() {
    return this.monoproduct_cabernet
  }
  returnMonoproduct_old() {
    return this.monoproduct_malbec
  }
}
