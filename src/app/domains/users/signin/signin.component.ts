import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';

// import { LayoutComponent } from '@shared/layout/layout.component';
import { NavbarComponent } from '@shared/navbar/navbar.component'


@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [NavbarComponent, ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {


  private authService = inject(AuthService);
  private router = inject(Router);

  formReg: FormGroup;


  constructor() {
    this.formReg = new FormGroup({
      fullname: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    })
  }

  onSubmit() {
    this.authService.register(this.formReg.value)
      .then(response => {
        console.log(response);
        this.router.navigate(['edit']);
      })
      .catch(error => console.log(error));
  }

  navToDash() {
    this.router.navigate(['dashboard'])
  }

  navToLogin() {
    this.router.navigate(['login'])
  }

}
