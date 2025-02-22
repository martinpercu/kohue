import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';

// import { LayoutComponent } from '@shared/layout/layout.component';
import { NavbarComponent } from '@shared/navbar/navbar.component';
import { FooterComponent } from '@shared/footer/footer.component';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavbarComponent, ReactiveFormsModule, FooterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  private authService = inject(AuthService);
  private router = inject(Router);

  formLogin: FormGroup;

  showPassword: boolean = false;

  constructor() {

    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  onSubmit() {
    this.authService.login(this.formLogin.value)
      // .then(response => {
      //   console.log(response);
      //   if(response == undefined) {
      //   }
      //   else {
      //     console.log("not undefinde");
      //     // this.navToShop();
      //   }
      // })
      // .catch(error => console.log(error));
  };

  clickGoogleButton() {
    this.authService.loginWithGoogle()
      .then(response => {
        console.log(response);
        this.navToShop();
    })
    .catch(error => console.log(error));
  };

  forgotPassword() {
    console.log(this.formLogin.value);
    const email = this.formLogin.value.email;
    console.log(email);
    this.authService.forgotPassword(email);
  }

  // navToEdit() {
  //   this.router.navigate(['edit'])
  // };

  navToJoin() {
    this.router.navigate(['join'])
  };

  navToSignIn() {
    this.router.navigate(['signin'])
  };

  navToShop() {
    this.router.navigate(['members'])
  };

  navToHome() {
    this.router.navigate([''])
  };

  showPasswordSwitch() {
    console.log("entramos");
    this.showPassword = !this.showPassword
  }

}
