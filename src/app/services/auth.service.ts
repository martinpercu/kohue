import { Injectable, inject } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth: Auth = inject(Auth);

  constructor() { }

  register({email, password}: any) {
    return createUserWithEmailAndPassword(this.auth, email, password)
  };

  login({email, password}: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  };

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider())
  }

  logout() {
    return signOut(this.auth);
  }

}
