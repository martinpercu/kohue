import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLinkWithHref } from '@angular/router';
import { ClientService } from '@services/client.service';
import { Client } from '@models/client.model';

import { NavbarComponent } from '@shared/navbar/navbar.component';

import { ButtonlogoutComponent } from '@shared/buttonlogout/buttonlogout.component';

import { AdminNavbarComponent } from '@admin/admin-navbar/admin-navbar.component';

import { AdminService } from '@services/admin.service';

@Component({
  selector: 'app-users-full',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLinkWithHref, NavbarComponent, AdminNavbarComponent],
  templateUrl: './users-full.component.html',
  styleUrl: './users-full.component.css'
})
export class UsersFullComponent {

  private clientService = inject(ClientService);
  private router = inject(Router);
  private adminService = inject(AdminService);

  expand: boolean = true;

  users!: Client[];
  usersToShow!: any[];


  ngOnInit() {
    this.clientService.getUsers().subscribe(users => {
      this.users = users;
      console.log(this.users);
      this.usersToShow = this.users;
      console.log(this.usersToShow);
    })
  }

  navEditClient(clientId: string) {
    this.expand = !this.expand
    this.router.navigate(['edit', clientId])
  }

  orderByFirstName() {
    this.usersToShow = this.adminService.orderFirstName(this.users);
  };

  orderByLastName() {
    this.usersToShow = this.adminService.orderLastName(this.users);
  };

  orderByEmail() {
    this.usersToShow = this.adminService.orderEmail(this.users);
  };

  orderByStripe() {
    this.usersToShow = this.adminService.orderStripeId(this.users);
  };

  orderBySubscription() {
    this.usersToShow = this.adminService.orderSubscription(this.users);
  }


}
