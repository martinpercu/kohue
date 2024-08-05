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
    // // dev
    // emailjs.init(emailjsInitVar);
    // alert('this is DEVELOPER email Kohue team if you see this message FASTER CALL Martin')
    // console.log(form);
    // let response = await emailjs.send("service_y1zbger", "template_n5608jq", {
    //   firstname: form.firstname,
    //   client_email: form.email,
    // });
    // console.log(response);


    // prod
    emailjs.init(emailjsInitVar);
    console.log(form);
    let response = await emailjs.send("service_7oaojn3", "template_cml9weo", {
      firstname: form.firstname,
      client_email: form.email,
    });
    console.log(response);



    // alert('No email service running');
  };

  async sendEmailRegister(form: any) {
    // dev
    emailjs.init(emailjsInitVar);
    console.log(form);
    let response = await emailjs.send("service_qx5ggkb", "template_n5608jq", {
      fullname: form.fullname,
      client_email: form.email,
    });
    console.log(response);


    // prod



    // alert('Register email not service running');

  }

}
