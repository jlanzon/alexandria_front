import { Component, Inject, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { documents } from 'src/app/services/document.model';
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
  documentCollection: AngularFirestoreCollection<documents>
  documents: Observable<any[]>
  test: any

  constructor(public afAuth: AngularFireAuth, public auth: AuthService, public afs: AngularFirestore,public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  ngOnInit(): void {
    this.userCollection = this.afs.collection('users')
    this.users = this.userCollection.valueChanges()
    // this.test = this.userCollection.valueChanges().subscribe( x => {
    //   console.log(x)
    // })

    // this.test = this.afAuth.user.subscribe(x => {console.log(x.uid)})
    console.log(this.test)
    this.documentCollection = this.afs.collection('documents')
    this.documents = this.documentCollection.valueChanges()

  }
}


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.html',
  styleUrls: ['./dialog.css']
})
export class DialogContentExampleDialog {
  user = AuthService
  userCollection: AngularFirestoreCollection<User>
  users: Observable<any[]>
  documentCollection: AngularFirestoreCollection<documents>
  documents: Observable<any[]>
  test: any
  uid: string
 


  constructor(public afAuth: AngularFireAuth, public auth: AuthService, public afs: AngularFirestore,public dialog: MatDialog) {}

  // openDialog() {
  //   const dialogRef = this.dialog.open(DialogContentExampleDialog);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

   false = null
   testButton(){
     this.afAuth.user.subscribe(x => {if (x) {
       this.uid = x.uid
    } else {
      this.false = true;  
    }})
  console.log(this.false)
}
  

  ngOnInit(): void {
    this.userCollection = this.afs.collection('users')
    this.users = this.userCollection.valueChanges()
    this.documentCollection = this.afs.collection('documents')
    this.documents = this.documentCollection.valueChanges()
    this.testButton()

  }
}
