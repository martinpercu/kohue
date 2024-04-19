import { Component, inject, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from '@services/client.service';
import { Client } from '@models/client.model'

import { EmailService } from '@services/email.service';

import { NavbarComponent } from '@shared/navbar/navbar.component'




@Component({
  selector: 'app-joinmail',
  standalone: true,
  imports: [NavbarComponent,ReactiveFormsModule],
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

  constructor() {
    this.buildForm();
  }

  private buildForm() {
    this.formJoinMail = this.formBuilder.group({
      fullname: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      byEmail: [true],
    });
  }

  async onSubmit() {
    const response = await this.clientService.addClient(this.formJoinMail.value);
    console.log(response);
    this.navToJoined();
    this.emailsender.sendEmail(this.formJoinMail.value); // PROD
    // alert('not send we are in DEV'); // DEV
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
