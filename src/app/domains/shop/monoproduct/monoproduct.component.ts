import { Component, Output, EventEmitter, signal, inject } from '@angular/core';
// import { NavbarsignedComponent } from '@shared/navbarsigned/navbarsigned.component';
import { Product } from '@models/product.model';

import { CartService  } from '@services/cart.service';
import { MonoproductService  } from '@services/monoproduct.service';


@Component({
  selector: 'app-monoproduct',
  standalone: true,
  imports: [],
  templateUrl: './monoproduct.component.html',
  styleUrl: './monoproduct.component.css'
})
export class MonoproductComponent {

  cart = signal<Product[]>([]);

  private cartService = inject(CartService);
  private monoproductService = inject(MonoproductService);


  @Output() cartOnOff = new EventEmitter();
  @Output() monoproductOff = new EventEmitter();
  @Output() showThanksForInterest = new EventEmitter();


  monoproduct: Product;

  product_old: Product;

  showTest: boolean = true;
  showThis: boolean = false;
  showMalbec: boolean = false;
  // showMalbec2: boolean = false;

  // @Output() addToCart = new EventEmitter();

  constructor() {
    this.monoproduct = this.monoproductService.returnMonoproduct();
    // console.log(this.monoproduct);
    this.product_old = this.monoproductService.returnMonoproduct_old();
  };

  addToCartHandler() {
    // this.addToCart.emit('este produto goes to the cart ==> ' + this.product.title + "\n" + "this is the price ===> " + this.product.price);
    // this.addToCart.emit(this.monoproduct);
    this.cartService.addToCart(this.monoproduct);
    this.showTheCart();
    // this.monoproductShowOff();
  };

  showTheCart() {
    // console.log('clicking from the child');
    this.cartOnOff.emit(true);
  };

  // monoproductShowOff() {
  //   // console.log('clicking from the child monoproduct to Turn itself off');
  //   this.monoproductOff.emit(false);
  // };

  showThanksForYourInterestAlert() {
    // alert('CLOSE ALERT this fall 2024. Stay tuned!')
    this.showThanksForInterest.emit(true);
  };

  // showMagic() {
  //   alert()
  // }
  showMagic() {
    const texto = prompt('uds. saben:');
    if (texto && texto.trim().toLowerCase() === 'blanquito') {
      this.showNew(); // Ejecuta la función X si el texto es "blanquito"
    }
    // Si el texto es cualquier otra cosa o se cancela, no pasa nada
  }

  showNew() {
    this.showTest = !this.showTest;
    this.showThis = !this.showThis;
  }

  toPdf(path: any) {
    const pdfPath = path;
    if (pdfPath) {
      window.open(`/assets/pdf/${pdfPath}`, '_blank');
      // this.router.navigate(['/pdf-viewer']);
    } else {
      alert('No hay PDF disponible');
    }
  }

  toPdff(path: any) {
    const pdfPath = path;
    if (pdfPath) {
      window.open(`/assets/pdf/${pdfPath}`, '_blank');
      // this.router.navigate(['/pdf-viewer']);
    } else {
      alert('No hay PDF disponible');
    }
  }

  toPdfs(path: any) {
    const pdfPath = path;
    if (pdfPath) {
      window.open(`/assets/pdf/${pdfPath}`, '_blank');
      // this.router.navigate(['/pdf-viewer']);
    } else {
      alert('No hay PDF disponible');
    }
  }

  toPdfd(path: any) {
    const pdfPath = path;
    if (pdfPath) {
      window.open(`/assets/pdf/${pdfPath}`, '_blank');
      // this.router.navigate(['/pdf-viewer']);
    } else {
      alert('No hay PDF disponible');
    }
  }

}
