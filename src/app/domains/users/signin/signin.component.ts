import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { Client } from '@models/client.model'
import { ClientService } from '@services/client.service';

// import { LayoutComponent } from '@shared/layout/layout.component';
import { NavbarComponent } from '@shared/navbar/navbar.component'

import { EmailService } from '@services/email.service';


@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [NavbarComponent, ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  private authService = inject(AuthService);
  private router = inject(Router);
  private clientService = inject(ClientService);
  private emailsender = inject(EmailService)

  formReg: FormGroup;

  client!: Client;

  constructor() {
    this.formReg = new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    })
  };

  onSubmit() {
    this.authService.register(this.formReg.value)
      .then(response => {
        console.log(response);
        console.log(response.user);
        console.log(response.user.uid);
        this.client = {
          firstname: this.formReg.value.firstname,
          lastname: this.formReg.value.lastname,
          email: this.formReg.value.email,
          clientUID: response.user.uid,
          billDifThanShip: false
        };

        console.log(this.client);
        this.createRegisteredUser(this.client, response.user.uid);
        // .then(() => {
        //   this.router.navigate(['edit']);
        // });
      })
      .catch(error => console.log(error));
  };

  async createRegisteredUser(userBasic: Client, userUID: any) {
    const response = await this.clientService.addUserWithId(userBasic, userUID).then(() => {
      this.navToEdit();
      this.emailsender.sendEmailRegister(this.formReg.value);
    });
    console.log(response);
    // this.navToEdit();
    // this.emailsender.sendEmailRegister(this.formReg.value);
  };

  signGoogle() {
    this.authService.loginWithGoogle()
    .then(response => {
      console.log(response);
      console.log(response.user);
      console.log(response.user.uid);
      if(response.user.email && response.user.displayName) {
          this.client = {
          firstname: response.user.displayName,
          email: response.user.email,
          clientUID: response.user.uid,
          billDifThanShip: false
        };
      }


      console.log(this.client);
      this.createRegisteredUser(this.client, response.user.uid);
      // .then(() => {
      //   this.router.navigate(['edit']);
      // });
    })
    .catch(error => console.log(error));
  };

  navToDash() {
    this.router.navigate(['dashboard'])
  };

  navToEdit() {
    this.router.navigate(['edit'])
  };

  navToHome() {
    this.router.navigate(['test'])
  };

  navToLogin() {
    this.router.navigate(['login'])
  };

}
