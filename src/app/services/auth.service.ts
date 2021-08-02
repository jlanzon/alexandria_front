import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from './user.model';
import { error } from '@angular/compiler/src/util';
import { AngularFireStorage } from '@angular/fire/storage';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;
  userLoggedIn: boolean;


  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap( user => {
        if (user) {
        return this.afs.doc<User>('users/${user.uid}').valueChanges();
      } else {
        return of(null);
      }
    })
    );
    this.afAuth.onAuthStateChanged((user) => {              // set up a subscription to always know the login status of the user
      if (user) {
          this.userLoggedIn = true;
      } else {
          this.userLoggedIn = false;
      }
  });
  }

  loginUser(email: string, password: string): Promise<any> {
    return this.afAuth.signInWithEmailAndPassword(email, password)
        .then((credential) => {
            console.log('Auth Service: loginUser: success', credential.user.uid);
            this.updateUserData(credential.user)
            // this.router.navigate(['/dashboard']);
        })
      }

signupUser(user: any): Promise<any> {
    return this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
        .then((result) => {
            let emailLower = user.email.toLowerCase();
            result.user.sendEmailVerification();                    // immediately send the user a verification email
        })
  // async googleSignin() {
  //   const provider = new AuthService.GoogleAuthProvider();

  // }
}

userInfo(user){
  const data: User = {
    uid: user.uid,
    email: user.email,
    role: {
      reader: true
    }
  }
  return data
}


private updateUserData(user) {
  // Sets user data to firestore on login
  const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
  const data: User = {
    uid: user.uid,
    email: user.email,
    role: {
      reader: true
    }
  }
  console.log(user.uid)
  return userRef.set(data, { merge: true })
}
}

