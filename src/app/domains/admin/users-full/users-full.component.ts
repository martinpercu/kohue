import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Router, RouterLinkWithHref } from '@angular/router';
import { ClientService } from '@services/client.service';
import { Client } from '@models/client.model';

import { NavbarComponent } from '@shared/navbar/navbar.component';

import { ButtonlogoutComponent } from '@shared/buttonlogout/buttonlogout.component';

import { AdminNavbarComponent } from '@admin/admin-navbar/admin-navbar.component';

import { AdminService } from '@services/admin.service';
import { SortDir } from '@services/admin.service';

@Component({
  selector: 'app-users-full',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLinkWithHref, NavbarComponent, AdminNavbarComponent, DatePipe],
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

  sortKey: string | null = null;
  sortDir: SortDir = 'asc';


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

  private applySort(key: string, sortFn: (dir: SortDir) => any[]) {
    if (this.sortKey === key) {
      this.sortDir = this.sortDir === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortKey = key;
      this.sortDir = 'asc';
    }
    this.usersToShow = sortFn(this.sortDir);
  }

  orderByFirstName() {
    this.applySort('firstname', dir => this.adminService.orderFirstName(this.users, dir));
  };

  orderByLastName() {
    this.applySort('lastname', dir => this.adminService.orderLastName(this.users, dir));
  };

  orderByEmail() {
    this.applySort('email', dir => this.adminService.orderEmail(this.users, dir));
  };

  orderByStripe() {
    this.applySort('stripe', dir => this.adminService.orderStripeId(this.users, dir));
  };

  orderBySubscription() {
    this.applySort('subscription', dir => this.adminService.orderSubscription(this.users, dir));
  }

  orderByOptionalText() {
    this.applySort('optionalText', dir => this.adminService.orderOptionalText(this.users, dir));
  }

  orderByCreatedAt() {
    this.applySort('createdAt', dir => this.adminService.orderCreatedAt(this.users, dir));
  };

  orderByLastLoginAt() {
    this.applySort('lastLoginAt', dir => this.adminService.orderLastLoginAt(this.users, dir));
  };


}
