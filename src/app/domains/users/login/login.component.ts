import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';

// import { LayoutComponent } from '@shared/layout/layout.component';
import { NavbarComponent } from '@shared/navbar/navbar.component'


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavbarComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  private authService = inject(AuthService);
  private router = inject(Router);

  formLogin: FormGroup;

  constructor() {

    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  onSubmit() {
    this.authService.login(this.formLogin.value)
      .then(response => {
        console.log(response);
        this.navToShop();
      })
      .catch(error => console.log(error));
  }

  clickGoogleButton() {
    this.authService.loginWithGoogle()
      .then(response => {
        console.log(response);
        this.navToShop();
    })
    .catch(error => console.log(error));
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
  }

}
