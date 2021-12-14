import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { first, switchMap } from 'rxjs/operators';
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
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap( user => {
        if (user) {
          this.updateUserData(user)
        return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
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

  whatisID(){
    return this.afAuth.currentUser
  }

  getUser() {
    return this.user$.pipe(first()).toPromise();
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
          this.ngZone.run(() =>{
            this.router.navigate(['dashboard']);
          });
            let emailLower = user.email.toLowerCase();
            this.createNewUser(result.user)
        }).catch((error) => {
          window.alert(error.message)
        })
  // async googleSignin() {
  //   const provider = new AuthService.GoogleAuthProvider();
  // }
}

userInfo(user){
  const data: User = {
    uid: user.uid,
    displayname: user.displayname,
    email: user.email,
    rank: user.rank,
    Bio: "This User has no Bio",
    role: {
      reader: true
    }
  }
  return data
}

updateRole(user){
  const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
}

private createNewUser(user) {
  // Sets user data to firestore on login
  const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
  const data: User = {
    verified: false,
    rank: "not configured",
    displayname: "not configured",
    uid: user.uid,
    email: user.email,
    role: {
      reader: true
    }
  }
  return userRef.set(data, { merge: true })
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
  return userRef.set(data, { merge: true })
}

signOut() {
  this.afAuth.signOut
}

///// Role-based Authorization //////

canRead(user: User): boolean {
  const allowed = ['admin', 'publisher', 'reader', 'manager', 'developer']
  return this.checkAuthorization(user, allowed)
}

canEdit(user: User): boolean {
  const allowed = ['admin', 'publisher', 'manager', 'developer']
  return this.checkAuthorization(user, allowed)
}

canDelete(user: User): boolean {
  const allowed = ['admin','manager', 'developer']
  return this.checkAuthorization(user, allowed)
}



// determines if user has matching role
private checkAuthorization(user: User, allowedRoles: string[]): boolean {
  if (!user) return false
  for (const role of allowedRoles) {
    if ( user.role[role] ) {
      return true
    }
  }
  return false
}

}

