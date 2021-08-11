import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/services/user.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  user = AuthService
  userCollection: AngularFirestoreCollection<User>
  users: Observable<any[]>
  displayedColumns: string[] = ['uid', 'displayname', 'email', 'rank'];
  

  constructor(public afAuth: AngularFireAuth, public auth: AuthService, public afs: AngularFirestore) { }

  ngOnInit(): void {
    this.userCollection = this.afs.collection('users')
    this.users = this.userCollection.valueChanges()
    
  }
}
