import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { Client } from '@models/client.model'
import { ClientService } from '@services/client.service';

// import { LayoutComponent } from '@shared/layout/layout.component';
import { NavbarComponent } from '@shared/navbar/navbar.component';

import { EmailService } from '@services/email.service';
import { FooterComponent } from '@shared/footer/footer.component';


@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [NavbarComponent, ReactiveFormsModule, FooterComponent],
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

  showPassword: boolean = false;


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
        // console.log(response);
        // console.log(response.user);
        // console.log(response.user.uid);
        this.client = {
          firstname: this.formReg.value.firstname,
          lastname: this.formReg.value.lastname,
          email: this.formReg.value.email,
          clientUID: response.user.uid,
          billDifThanShip: true,
          stripeCustomerId: 'none'
        };
        // console.log(this.client);
        this.createRegisteredUser(this.client, response.user.uid);
      })
      .catch(error => {
        console.log(error);
        console.log(error.code);
        if (error.code == "auth/email-already-in-use") {
          const emailUsed = this.formReg.value.email;
          const currentUser = this.authService.checkerIfCurrentUser();
          if(currentUser){
            window.alert("You are already register with " + emailUsed);
            this.navToShopArea();
          } else {
            window.alert("An account with " + emailUsed + " already exist. Please Log In");
            this.navToLogin();
          }
          console.log("esto esta despues");
        }
        else {
          console.log(error)
        };
      });
  };

  async createRegisteredUser(userBasic: Client, userUID: any) {
    const response = await this.clientService.addUserWithId(userBasic, userUID).then(() => {
      // console.log(this.formReg.value);
      // console.log(this.client);

      this.emailsender.sendEmailRegister(this.client);
      this.navToShopArea();

      // this.router.navigate(['edit']);
    });
    // console.log("shoud be empty/null ==>  " + response);
  };

  signGoogle() {
    this.authService.loginWithGoogle()
    .then(response => {
      // console.log(response);
      // console.log(response.user);
      // console.log(response.user.uid);
      if(response.user.email && response.user.displayName) {
          this.client = {
          firstname: response.user.displayName,
          lastname: ' ',
          email: response.user.email,
          clientUID: response.user.uid,
          billDifThanShip: true,
          stripeCustomerId: 'none'
        };
      // console.log(this.client);
      this.createRegisteredUser(this.client, response.user.uid);
      };
    })
    .catch(error => console.log(error));
  };

  navToDash() {
    this.router.navigate(['dashboard'])
  };

  navToShopArea() {
    this.router.navigate(['members'])
  };

  navToHome() {
    this.router.navigate([''])
  };

  navToLogin() {
    this.router.navigate(['login'])
  };

  showPasswordSwitch() {
    this.showPassword = !this.showPassword
  }

}
