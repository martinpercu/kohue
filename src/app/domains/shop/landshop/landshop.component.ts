import { Component } from '@angular/core';
import { EditComponent } from '@users/edit/edit.component';
import { NavbarsignedComponent } from '@shared/navbarsigned/navbarsigned.component';
import { MonoproductComponent } from '@shop/monoproduct/monoproduct.component';


@Component({
  selector: 'app-landshop',
  standalone: true,
  imports: [EditComponent, NavbarsignedComponent, MonoproductComponent],
  templateUrl: './landshop.component.html',
  styleUrl: './landshop.component.css'
})
export class LandshopComponent {

  showWine: boolean = false;
  showEditAccount: boolean = true;



  fromNavbar(event: boolean) {
    this.showWine = event
  }
  fromNavbarAccount(event: boolean) {
    this.showEditAccount = event
  }

}
