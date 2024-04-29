import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { Client } from '@models/client.model'
import { ClientService } from '@services/client.service';

// import { LayoutComponent } from '@shared/layout/layout.component';
import { NavbarComponent } from '@shared/navbar/navbar.component'


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

  formReg: FormGroup;

  client!: Client;


  constructor() {
    this.formReg = new FormGroup({
      firstname: new FormControl(),
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
        this.createRegisteredUser(this.formReg.value, response.user.uid);
        this.router.navigate(['edit']);
      })
      .catch(error => console.log(error));
  };


  async createRegisteredUser(userBasic: Client, userUID: any) {
    console.log(userBasic);
    const response = await this.clientService.addUserWithId(userBasic, userUID);
    console.log(response);
    // this.navToJoined();
    // this.emailsender.sendEmail(this.formJoinMail.value); // PROD
    // alert('not send we are in DEV'); // DEV
    // this.navToJoined();// DEV
  };

  navToDash() {
    this.router.navigate(['dashboard'])
  };

  navToLogin() {
    this.router.navigate(['login'])
  };

  navToHome() {
    this.router.navigate(['test'])
  };

}
