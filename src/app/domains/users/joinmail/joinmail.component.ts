import { Component, inject, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from '@services/client.service';
import { Client } from '@models/client.model'

import { EmailService } from '@services/email.service';



@Component({
  selector: 'app-joinmail',
  standalone: true,
  imports: [ReactiveFormsModule],
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
    // const form = this.formJoinMail.value;
    this.emailsender.sendEmail(this.formJoinMail.value);
    // this.sendEmail()
  }

  // private async sendEmail() {
  //   emailjs.init('WBAY4V6yXv5MXO115');
  //   console.log(this.formJoinMail.value);
  //   let response = await emailjs.send("service_4wbv4ud","template_n5608jq",{
  //     fullname: this.formJoinMail.value.fullname,
  //     client_email: this.formJoinMail.value.email,
  //     });

  //     alert('message send it OK')
  //  }

  navToJoined() {
    this.router.navigate(['joinedmaillist'])
  }


  // navToDash() {
  //   this.router.navigate(['dashboard'])
  // }

  navToSignIn() {
    this.router.navigate(['signin'])
  }

}
