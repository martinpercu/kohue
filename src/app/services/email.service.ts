import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

// import

import { emailjsInitVar } from './../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  form: any;

  constructor() {
  }


  async sendEmail(form: any) {
    emailjs.init(emailjsInitVar);
    console.log(form);
    let response = await emailjs.send("service_y1zbger", "template_n5608jq", {
      fullname: form.fullname,
      client_email: form.email,
    });
    alert('message send it OK NO')
    console.log(response);
  }

}
