import { Injectable, inject } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider
} from '@angular/fire/auth';
import { sendPasswordResetEmail } from 'firebase/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth: Auth = inject(Auth);
  private router = inject(Router);

  constructor() { }

  register({email, password}: any) {
    return createUserWithEmailAndPassword(this.auth, email, password)
  };

  async login({email, password}: any) {
    return signInWithEmailAndPassword(this.auth, email, password)
    .then(response => {
        // console.log(response);
        this.navToMembersArea();
      })
      .catch(error => {
        console.log(error);
        console.log(error.code);
        if(error.code == "auth/missing-email") {
          window.alert("Fill email input")
        }
        if(error.code == "auth/invalid-email") {
          window.alert("Invalid email")
        }
        if(error.code == "auth/missing-password") {
          window.alert("Please enter your password")
        }
        if(error.code == "auth/invalid-credential") {
          window.alert("Email or Password error")
        }
        else {
          console.log(error)
        };
      });
  };

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider())
  };

  logout() {
    return signOut(this.auth);
    // console.log('LogOUT from Authservice OK');
  };

  forgotPassword(passwordResetEmail: string) {
    return sendPasswordResetEmail(this.auth, passwordResetEmail)
    .then(() => {
      window.alert(`A recovery message was sent to ${passwordResetEmail}. Please check your inbox`);
    })
    .catch((error) => {
      console.log(error);
      console.log(error);
      console.log(error.code);
      if(error.code == "auth/missing-email") {
        window.alert("Fill email input")
      }
    })
  }

  getUserUid() {
    if (this.auth.currentUser !== null) {
      return this.auth.currentUser.uid
    }
    return null
  }

  navToMembersArea() {
    this.router.navigate(['members'])
  };

}
