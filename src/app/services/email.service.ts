import { Injectable, inject } from '@angular/core';
import emailjs from '@emailjs/browser';

// import { emailjsInitVar } from './../../environment/environment';
import { EmailVars } from '@env/environment';

import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private router = inject(Router);

  form: any;
  client: any;

  constructor() {
  }

  async sendEmailJoin(form: any) {
    emailjs.init(EmailVars.INIT_VAR);
    console.log(form);
    let response = await emailjs.send(EmailVars.JOIN_SERVICE, EmailVars.JOIN_TEMPLATE, {
      firstname: form.firstname,
      client_email: form.email,
    });
    console.log(response);
  };

  async sendEmailRegister(client: any) {
    emailjs.init(EmailVars.INIT_VAR_PROD);
    // console.log(client);
    let response = await emailjs.send(EmailVars.CREATED_SERVICE_2025_PROD, EmailVars.CREATED_TEMPLATE_2025_PROD, {
      firstname: client.firstname,
      client_email: client.email,
    });
    console.log(response);
  };

  async sendEmailInterested(user: any) {
    emailjs.init(EmailVars.INIT_VAR_PROD);
    console.log(user);
    let response = await emailjs.send(EmailVars.CLICKER_SERVICE_PROD, EmailVars.CLICKER_TEMPLATE_PROD, {
      firstname: user.firstname,
      lastname: user.lastname,
      client_email: user.email,
    });
    console.log(response);
  };

}
