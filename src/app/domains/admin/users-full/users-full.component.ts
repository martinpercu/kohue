import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLinkWithHref } from '@angular/router';
import { ClientService } from '@services/client.service';
import { Client } from '@models/client.model';

import { NavbarComponent } from '@shared/navbar/navbar.component';

import { ButtonlogoutComponent } from '@shared/buttonlogout/buttonlogout.component';

import { AdminNavbarComponent } from '@admin/admin-navbar/admin-navbar.component';

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

  expand: boolean = true;

  users!: Client[];


  ngOnInit() {
    this.clientService.getUsers().subscribe(users => {
      this.users = users;
      console.log(this.users);
    })
  }

  navEditClient(clientId: string) {
    this.expand = !this.expand
    this.router.navigate(['edit', clientId])
  }


}
