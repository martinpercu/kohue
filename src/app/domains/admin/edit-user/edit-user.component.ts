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
      firstname: [this.user.firstname, [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      lastname: [this.user.lastname, [Validators.minLength(2), Validators.maxLength(30)]],
      email: [this.user.email, [Validators.required, Validators.email]],
      phone: [this.user.phone, [Validators.minLength(9)]],
      birthdate: [this.user.birthdate, [Validators.required, Validators.minLength(7)]],
      byEmail: [this.user.byEmail],
      byPhone: [this.user.byPhone],
      optionalText: [this.user.optionalText, Validators.maxLength(80)],
      address: [this.user.address, Validators.minLength(8)],
      addressExtra: [this.user.addressExtra],
      city: [this.user.city, [Validators.minLength(2)]],
      state: [this.user.state],
      zipCode: [this.user.zipCode, Validators.minLength(5)],
      country: [this.user.country],
      // agree: [false],
      billDifThanShip: [this.user.billDifThanShip],
      xaddress: [this.user.xaddress],
      xaddressExtra: [this.user.xaddressExtra],
      xcity: [this.user.xcity],
      xstate: [this.user.xstate],
      xzipCode: [this.user.xzipCode],
      // xcountry: [this.user.xcountry],
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


  get firstnameField() {
    return this.form.get('firstname')
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
  get birthdateField() {
    return this.form.get('birthdate')
  };
  get byEmailField() {
    return this.form.get('byEmail')
  };
  get byPhoneField() {
    return this.form.get('byPhone')
  };
  get optionalTextField() {
    return this.form.get('optionalText')
  };

  get addressField() {
    return this.form.get('address')
  };
  get addressExtraField() {
    return this.form.get('addressExtra')
  };
  get cityField() {
    return this.form.get('city')
  };
  get stateField() {
    return this.form.get('state')
  };
  get zipCodeField() {
    return this.form.get('zipCode')
  };

  // get adultField() {
  //   return this.form.get('adult')
  // };
  // get agreeField() {
  //   return this.form.get('agree')
  // };

  get billDifThanShipField() {
    return this.form.get('billDifThanShip')
  };

  get xaddressField() {
    return this.form.get('xaddress')
  };
  get xaddressExtraField() {
    return this.form.get('xaddressExtra')
  };
  get xcityField() {
    return this.form.get('xcity')
  };
  get xstateField() {
    return this.form.get('xstate')
  };
  get xzipCodeField() {
    return this.form.get('xzipCode')
  };




  // FIRST name
  get isfirstnameFieldValid() {
    return this.firstnameField!.touched && this.firstnameField!.valid
  };
  get isfirstnameFieldInvalid() {
    return this.firstnameField!.touched && this.firstnameField!.invalid
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
  // BIRTHDATE
  get isbirthdateFieldValid() {
    return this.birthdateField!.touched && this.birthdateField!.valid
  };
  get isbirthdateFieldInvalid() {
    return this.birthdateField!.touched && this.birthdateField!.invalid
  };
  // BY phone
  get isbyPhoneFieldValid() {
    return this.byPhoneField!.touched && this.byPhoneField!.valid
  };
  get isbyPhoneFieldInvalid() {
    return this.byPhoneField!.touched && this.byPhoneField!.invalid
  };
  // BY email
  get isbyEmailFieldValid() {
    return this.byEmailField!.touched && this.byEmailField!.valid
  };
  get isbyEmailFieldInvalid() {
    return this.byEmailField!.touched && this.byEmailField!.invalid
  };
  // OPTIONAL TEXT
  get isoptionalTextFieldValid() {
    return this.optionalTextField!.touched && this.optionalTextField!.valid
  };
  get isoptionalTextFieldInvalid() {
    return this.optionalTextField!.touched && this.optionalTextField!.invalid
  };


  // ADDRESS
  get addressFieldValid() {
    return this.addressField!.touched && this.addressField!.valid
  };
  get addressFieldInvalid() {
    return this.addressField!.touched && this.addressField!.invalid
  };
  // ADDRESS Extra
  get addressExtraFieldValid() {
    return this.addressExtraField!.touched && this.addressExtraField!.valid
  };
  get addressExtraFieldInvalid() {
    return this.addressExtraField!.touched && this.addressExtraField!.invalid
  };
  // CITY
  get cityFieldValid() {
    return this.cityField!.touched && this.cityField!.valid
  };
  get cityFieldInvalid() {
    return this.cityField!.touched && this.cityField!.invalid
  };
  // STATE
  get stateFieldValid() {
    return this.stateField!.touched && this.stateField!.valid
  };
  get stateFieldInvalid() {
    return this.stateField!.touched && this.stateField!.invalid
  };
  // ZIP CODE
  get zipCodeFieldValid() {
    return this.zipCodeField!.touched && this.zipCodeField!.valid
  };
  get zipCodeFieldInvalid() {
    return this.zipCodeField!.touched && this.zipCodeField!.invalid
  };


  // BILL Same as SHIPPING
  get isbillDifThanShipFieldValid() {
    return this.billDifThanShipField!.touched && this.billDifThanShipField!.valid
  };
  get isbillDifThanShipFieldInvalid() {
    return this.billDifThanShipField!.touched && this.billDifThanShipField!.invalid
  };


  // X ADDRESS
  get xaddressFieldValid() {
    return this.xaddressField!.touched && this.xaddressField!.valid
  };
  get xaddressFieldInvalid() {
    return this.xaddressField!.touched && this.xaddressField!.invalid
  };
  // X ADDRESS Extra xaddressExtra
  get xaddressExtraFieldValid() {
    return this.xaddressExtraField!.touched && this.xaddressExtraField!.valid
  };
  get xaddressExtraFieldInvalid() {
    return this.xaddressExtraField!.touched && this.xaddressExtraField!.invalid
  };
  // X CITY
  get xcityFieldValid() {
    return this.xcityField!.touched && this.xcityField!.valid
  };
  get xcityFieldInvalid() {
    return this.xcityField!.touched && this.xcityField!.invalid
  };
  // X STATE
  get xstateFieldValid() {
    return this.xstateField!.touched && this.xstateField!.valid
  };
  get xstateFieldInvalid() {
    return this.xstateField!.touched && this.xstateField!.invalid
  };
  // X ZIP CODE
  get xzipCodeFieldValid() {
    return this.xzipCodeField!.touched && this.xzipCodeField!.valid
  };
  get xzipCodeFieldInvalid() {
    return this.xzipCodeField!.touched && this.xzipCodeField!.invalid
  };

}
