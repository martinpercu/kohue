import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLinkWithHref } from '@angular/router';
import { ClientService } from '@services/client.service';
import { Client } from '@models/client.model';

import { NavbarComponent } from '@shared/navbar/navbar.component';

import { AdminNavbarComponent } from '@admin/admin-navbar/admin-navbar.component';

import { AdminService } from '@services/admin.service';

@Component({
  selector: 'app-clients-full',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLinkWithHref, NavbarComponent, AdminNavbarComponent],
  templateUrl: './clients-full.component.html',
  styleUrl: './clients-full.component.css'
})
export class ClientsFullComponent {

  private clientService = inject(ClientService);
  private router = inject(Router);
  private adminService = inject(AdminService);

  expand: boolean = true;

  clients!: Client[];
  clientsToShow!: any[];

  ngOnInit() {
    this.clientService.getClients().subscribe(clients => {
      this.clients = clients;
      console.log(this.clients);
      this.clientsToShow = this.clients;
      console.log(this.clientsToShow);
    })
  }

  navEditClient(clientId: string) {
    this.expand = !this.expand
    this.router.navigate(['edit', clientId])
  }

  deleteClient(client: Client) {
    if (confirm(`Do you really want to delete ${client.firstname}.? \n\nGUARDA No hay marcha atrás!! `)) {
      console.log(client);
      this.clientService.deleteClient(client);
      // alert('Y se borró');
    }
  }

  orderByFirstName() {
    this.clientsToShow = this.adminService.orderFirstName(this.clients);
  };

  orderByLastName() {
    this.clientsToShow = this.adminService.orderLastName(this.clients);
  };

  orderByEmail() {
    this.clientsToShow = this.adminService.orderEmail(this.clients);
  };

}
