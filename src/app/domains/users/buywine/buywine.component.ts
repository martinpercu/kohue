import { Component, inject } from '@angular/core';
import { NavbarsignedComponent } from '@shared/navbarsigned/navbarsigned.component';

import { AuthService } from '@services/auth.service';
import { Client } from '@models/client.model'
import { user } from '@angular/fire/auth';

@Component({
  selector: 'app-buywine',
  standalone: true,
  imports: [NavbarsignedComponent],
  templateUrl: './buywine.component.html',
  styleUrl: './buywine.component.css'
})
export class BuywineComponent {


  private auth = inject(AuthService);


  private userId! : any;



  constructor() {
    const id = this.auth.getUserUid();
    if (id) {
      this.userId = id
      console.log('hay parametro', this.userId);
      // this.getUser()
    }
  };

}
