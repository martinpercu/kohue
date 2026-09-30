import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { ClientService } from '@services/client.service';
import { EmailService } from '@services/email.service';
import { Client } from '@models/client.model';

// import { LayoutComponent } from '@shared/layout/layout.component';
import { NavbarComponent } from '@shared/navbar/navbar.component';
import { FooterComponent } from '@shared/footer/footer.component';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavbarComponent, ReactiveFormsModule, FooterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  private authService = inject(AuthService);
  private clientService = inject(ClientService);
  private emailsender = inject(EmailService);
  private router = inject(Router);

  formLogin: FormGroup;

  showPassword: boolean = false;

  constructor() {

    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  onSubmit() {
    this.authService.login(this.formLogin.value)
      .then(async response => {
        if (!response) {
          return;
        }
        const now = new Date().toISOString();
        try {
          await this.clientService.updateOneUserJustOneField('lastLoginAt', now, response.user.uid);
        } catch (error) {
          console.log(error);
        }
        this.navToShop();
      })
      .catch(error => console.log(error));
  };

  clickGoogleButton() {
    this.authService.loginWithGoogle()
      .then(async response => {
        if (!response.user.email) {
          return;
        }
        const now = new Date().toISOString();
        const existing = await this.clientService.getOneUser(response.user.uid);
        if (existing) {
          try {
            await this.clientService.updateOneUserJustOneField('lastLoginAt', now, response.user.uid);
          } catch (error) {
            console.log(error);
          }
          this.navToShop();
          return;
        }
        const client: Client = {
          firstname: response.user.displayName || response.user.email,
          lastname: ' ',
          email: response.user.email,
          clientUID: response.user.uid,
          billDifThanShip: true,
          stripeCustomerId: 'none',
          createdAt: now,
          lastLoginAt: now
        };
        await this.clientService.addUserWithId(client, response.user.uid);
        this.emailsender.sendEmailRegister(client);
        this.navToShop();
    })
    .catch(error => console.log(error));
  };

  forgotPassword() {
    console.log(this.formLogin.value);
    const email = this.formLogin.value.email;
    console.log(email);
    this.authService.forgotPassword(email);
  }

  // navToEdit() {
  //   this.router.navigate(['edit'])
  // };

  navToJoin() {
    this.router.navigate(['join'])
  };

  navToSignIn() {
    this.router.navigate(['signin'])
  };

  navToShop() {
    this.router.navigate(['members'])
  };

  navToHome() {
    this.router.navigate([''])
  };

  showPasswordSwitch() {
    console.log("entramos");
    this.showPassword = !this.showPassword
  }

}
