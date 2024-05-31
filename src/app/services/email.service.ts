import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

// import { emailjsInitVar } from './../../environment/environment';
import { EmailVars } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  form: any;

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

  async sendEmailRegister(form: any) {
    emailjs.init(EmailVars.INIT_VAR);
    console.log(form);
    let response = await emailjs.send(EmailVars.CREATED_SERVICE, EmailVars.CREATED_TEMPLATE, {
      fullname: form.fullname,
      client_email: form.email,
    });
    console.log(response);
  };

}
