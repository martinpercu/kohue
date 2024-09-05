import { Component, inject, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from '@services/client.service';
import { Client } from '@models/client.model'

import { EmailService } from '@services/email.service';

import { NavbarComponent } from '@shared/navbar/navbar.component';
import { FooterComponent } from '@shared/footer/footer.component'




@Component({
  selector: 'app-joinmail',
  standalone: true,
  imports: [NavbarComponent, ReactiveFormsModule, FooterComponent],
  templateUrl: './joinmail.component.html',
  styleUrl: './joinmail.component.css'
})
export class JoinmailComponent {

  private clientService = inject(ClientService);
  private router = inject(Router);

  private formBuilder = inject(FormBuilder)
  private emailsender = inject(EmailService)

  client!: Client;

  formJoinMail!: FormGroup;

  fullname: [] = [];

  constructor() {
    this.buildForm();
  }

  private buildForm() {
    this.formJoinMail = this.formBuilder.group({
      fullname: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  async onSubmit() {
    this.client = this.formJoinMail.value;
    this.client.firstname = this.client.fullname?.split(' ')[0];

    console.log(this.client);
    // console.log(this.formJoinMail.value);


    const response = await this.clientService.addClient(this.client);
    console.log(response);
    this.navToJoined();
    this.emailsender.sendEmailJoin(this.client);
  };

  navToJoined() {
    this.router.navigate(['joinedmaillist'])
  };

  navToSignIn() {
    this.router.navigate(['signin'])
  };

  navToHome() {
    this.router.navigate(['test'])
  };

}
