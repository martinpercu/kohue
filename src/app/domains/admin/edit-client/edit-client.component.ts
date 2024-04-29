import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormControl, Validators, FormGroup, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Client } from '@models/client.model';
import { ClientService } from '@services/client.service';

import { phonePath } from '@shared/icon-paths/icons'


@Component({
  selector: 'app-edit-client',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-client.component.html',
  styleUrl: './edit-client.component.css'
})
export class EditClientComponent {

  private clientService = inject(ClientService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute)

  private formBuilder = inject(FormBuilder)

  form!: FormGroup;

  client!: Client;
  clientId!: string;

  phonePath:string;
  color:string;


  constructor() {
    const id = String(this.activatedRoute.snapshot.paramMap.get('id'));
    if (id) {
      this.clientId = id
      console.log('hay parametro', this.clientId);
      this.getClient()
    };

    this.phonePath = phonePath;
    this.color = "green";

  }

  ngOnInit() {

  }

  async getClient() {
    const clientGetted = await this.clientService.getOneClient(this.clientId);
    this.client = clientGetted
    console.log(this.client);
    this.buildForm();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      fullname: [this.client.fullname, [Validators.required, Validators.minLength(4)]],
      firstname: [this.client.firstname, [Validators.minLength(3)]],
      lastname: [this.client.lastname, [Validators.minLength(3)]],
      email: [this.client.email, [Validators.required, Validators.email]],
      phone: [this.client.phone, Validators.min(9)],
      byEmail: [this.client.byEmail],
      byPhone: [this.client.byPhone],
      address: [this.client.address, Validators.minLength(8)],
      city: [this.client.city],
      zipCode: [this.client.zipCode, Validators.minLength(5)],
      state: [this.client.state],
      addressExtra: [this.client.addressExtra],
      country: [this.client.country],
      adult: [true],
      agree: [false],
    });
  }


  getValue() {
    console.log(this.fullnameField!.value);
  }

  saveClient(event: Event) {
    if (this.form.valid) {
    console.log(this.form.value);
    this.clientService.updateOneClient(this.form.value, this.clientId);
    this.router.navigate(['admin'])
    } else {
      this.form.markAllAsTouched();
    }
  }



  get fullnameField() {
    return this.form.get('fullname')
  }
  get firstnameField() {
    return this.form.get('firstname')
  }
  get lastnameField() {
    return this.form.get('lastname')
  }
  get emailField() {
    return this.form.get('email')
  }
  get phoneField() {
    return this.form.get('phone')
  }
  get byEmailField() {
    return this.form.get('byEmail')
  }
  get byPhoneField() {
    return this.form.get('byPhone')
  }
  get addressField() {
    return this.form.get('address')
  }
  get zipCodeField() {
    return this.form.get('zipCode')
  }
  get adultField() {
    return this.form.get('adult')
  }
  get agreeField() {
    return this.form.get('agree')
  }

  // FIRST name
  get isfirstnameFieldValid() {
    return this.firstnameField!.touched && this.firstnameField!.valid
  }
  get isfirstnameFieldInvalid() {
    return this.firstnameField!.touched && this.firstnameField!.invalid
  }
  // LAST name
  get islastnameFieldValid() {
    return this.lastnameField!.touched && this.lastnameField!.valid
  }
  get islastnameFieldInvalid() {
    return this.lastnameField!.touched && this.lastnameField!.invalid
  }
  // FULLNAME
  get isfullnameFieldValid() {
    return this.fullnameField!.touched && this.fullnameField!.valid
  }
  get isfullnameFieldInvalid() {
    return this.fullnameField!.touched && this.fullnameField!.invalid
  }
}
