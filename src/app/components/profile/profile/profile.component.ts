import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/services/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user = AuthService
  userCollection: AngularFirestoreCollection<User>
  users: Observable<any[]>
  
  

  constructor(public afAuth: AngularFireAuth, public auth: AuthService, public afs: AngularFirestore) { }

  ngOnInit(): void {
    this.userCollection = this.afs.collection('users')
    this.users = this.userCollection.valueChanges()
  }

}
