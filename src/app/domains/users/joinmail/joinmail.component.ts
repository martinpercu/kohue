import { Component, inject, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from '@services/client.service';
import { Client } from '@models/client.model'


@Component({
  selector: 'app-joinmail',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './joinmail.component.html',
  styleUrl: './joinmail.component.css'
})
export class JoinmailComponent {

  // emailjs.send("service_4wbv4ud","template_n5608jq",{
  //   fullname: "ClienteFullname",
  //   client_email: "order@4timp.com",
  //   });

  private clientService = inject(ClientService);
  private router = inject(Router);

  private formBuilder = inject(FormBuilder)

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
  }

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
