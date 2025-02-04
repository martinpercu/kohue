import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopService {


  showPurchase = signal<boolean>(false);

  constructor() { }

  handlerShowPurchase(theSwitchPosition: boolean) {
    this.showPurchase.set(theSwitchPosition);
  }

}
