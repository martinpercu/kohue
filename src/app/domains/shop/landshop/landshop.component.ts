import { Component } from '@angular/core';
import { EditComponent } from '@users/edit/edit.component';
import { NavbarsignedComponent } from '@shared/navbarsigned/navbarsigned.component';
import { MonoproductComponent } from '@shop/monoproduct/monoproduct.component';
import { ShippingmethodComponent } from '@shop/shippingmethod/shippingmethod.component';
import { CartComponent } from '@shop/cart/cart.component';


@Component({
  selector: 'app-landshop',
  standalone: true,
  imports: [EditComponent, NavbarsignedComponent, MonoproductComponent, ShippingmethodComponent, CartComponent],
  templateUrl: './landshop.component.html',
  styleUrl: './landshop.component.css'
})
export class LandshopComponent {

  showWine: boolean = false;
  showEditAccount: boolean = true;
  showCart: boolean = false



  fromNavbar(event: boolean) {
    this.showWine = event
  };

  fromNavbarAccount(event: boolean) {
    this.showEditAccount = event
  };

  fromNavbarCart(event: boolean) {
    console.log(event);
    this.showCart = event
  }

  fromProduct(event: boolean) {
    console.log(event);
    console.log("qsdfqdfqsdf");
    this.showCart = event
  }




}
