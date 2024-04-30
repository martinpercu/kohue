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


  async sendEmailJoin(form: any) {
    // // prod
    // emailjs.init(emailjsInitVar);
    // console.log(form);
    // let response = await emailjs.send("service_qx5ggkb", "template_n5608jq", {
    //   fullname: form.fullname,
    //   client_email: form.email,
    // });
    // console.log(response);

    // dev
    alert('No email service running') // dev
  };

  async sendEmailRegister(form: any) {
    // // prod
    // emailjs.init(emailjsInitVar);
    // console.log(form);
    // let response = await emailjs.send("service_qx5ggkb", "template_n5608jq", {
    //   fullname: form.fullname,
    //   client_email: form.email,
    // });
    // console.log(response);

    // dev
    alert('Register email not service running') // dev

  }

}
