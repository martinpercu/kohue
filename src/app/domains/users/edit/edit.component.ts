import { Component, inject } from '@angular/core';

import { NavbarComponent } from '@shared/navbar/navbar.component';
import { Client } from '@models/client.model'


import { AuthService } from '@services/auth.service';
import { ClientService } from '@services/client.service';



@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {


  private auth = inject(AuthService);
  private clientService = inject(ClientService);

  private userUid! : any;

  user!: Client;

  constructor() {
    this.userUid = this.auth.getUserUid();
    console.log(this.userUid);
  }




  async getUser() {
    const userGetted = await this.clientService.getOneUser(this.userUid);
    this.user = userGetted
    console.log(this.user);
    // this.buildForm();
  };


}
