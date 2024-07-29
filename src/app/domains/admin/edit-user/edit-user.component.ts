import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormControl, Validators, FormGroup, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Client } from '@models/client.model';
import { ClientService } from '@services/client.service';

import { phonePath } from '@shared/icon-paths/icons';

import { AdminNavbarComponent } from '@admin/admin-navbar/admin-navbar.component';




@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AdminNavbarComponent],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent {

  private clientService = inject(ClientService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute)

  private formBuilder = inject(FormBuilder)

  form!: FormGroup;

  user!: Client;
  userId!: string;

  phonePath:string;
  color:string;



  constructor() {
    const id = String(this.activatedRoute.snapshot.paramMap.get('id'));
    if (id) {
      this.userId = id
      console.log('hay parametro', this.userId);
      this.getUser()
    };

    this.phonePath = phonePath;
    this.color = "green";

  };


  ngOnInit() {

  };

  async getUser() {
    const userGetted = await this.clientService.getOneUser(this.userId);
    this.user = userGetted
    console.log(this.user);
    this.buildForm();
  };

  private buildForm() {
    this.form = this.formBuilder.group({
      fullname: [this.user.fullname, [Validators.minLength(4)]],
      firstname: [this.user.firstname, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      middlename: [this.user.middlename, [Validators.maxLength(20)]],
      lastname: [this.user.lastname, [Validators.minLength(3), Validators.maxLength(30)]],
      email: [this.user.email, [Validators.required, Validators.email]],
      address: [this.user.address, Validators.minLength(8)],
      addressExtra: [this.user.addressExtra],
      city: [this.user.city],
      state: [this.user.state],
      zipCode: [this.user.zipCode, Validators.minLength(5)],
      phone: [this.user.phone, [Validators.minLength(9)]],
      optionalText: [this.user.optionalText],
      country: [this.user.country],
      birthdate: [this.user.birthdate, [Validators.required, Validators.minLength(7)]],
      agree: [false],
      byEmail: [this.user.byEmail],
      byPhone: [this.user.byPhone],
    });
  };


  // getValue() {
  //   console.log(this.fullnameField!.value);
  // };

  saveUser(event: Event) {
    if (this.form.valid) {
    console.log(this.form.value);
    this.clientService.updateOneUser(this.form.value, this.userId);
    this.router.navigate(['usersadmin'])
    } else {
      this.form.markAllAsTouched();
    }
  };


  // get fullnameField() {
  //   return this.form.get('fullname')
  // };
  get firstnameField() {
    return this.form.get('firstname')
  };
  get middlenameField() {
    return this.form.get('middlename')
  };
  get lastnameField() {
    return this.form.get('lastname')
  };
  get emailField() {
    return this.form.get('email')
  };
  get phoneField() {
    return this.form.get('phone')
  };
  get byEmailField() {
    return this.form.get('byEmail')
  };
  get byPhoneField() {
    return this.form.get('byPhone')
  };
  get addressField() {
    return this.form.get('address')
  };
  get zipCodeField() {
    return this.form.get('zipCode')
  };
  get adultField() {
    return this.form.get('adult')
  };
  get agreeField() {
    return this.form.get('agree')
  };

  // FIRST name
  get isfirstnameFieldValid() {
    return this.firstnameField!.touched && this.firstnameField!.valid
  };
  get isfirstnameFieldInvalid() {
    return this.firstnameField!.touched && this.firstnameField!.invalid
  };
  // MIDDLENAME
  get ismiddlenameFieldValid() {
    return this.middlenameField!.touched && this.middlenameField!.valid
  };
  get ismiddlenameFieldInvalid() {
    return this.middlenameField!.touched && this.middlenameField!.invalid
  };
  // LAST name
  get islastnameFieldValid() {
    return this.lastnameField!.touched && this.lastnameField!.valid
  };
  get islastnameFieldInvalid() {
    return this.lastnameField!.touched && this.lastnameField!.invalid
  };
  // EMAIL
  get isemailFieldValid() {
    return this.emailField!.touched && this.emailField!.valid
  };
  get isemailFieldInvalid() {
    return this.emailField!.touched && this.emailField!.invalid
  };
  // PHONE
  get isphoneFieldValid() {
    return this.phoneField!.touched && this.phoneField!.valid
  };
  get isphoneFieldInvalid() {
    return this.phoneField!.touched && this.phoneField!.invalid
  };

}
