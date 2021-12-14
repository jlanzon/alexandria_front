import { Component, Inject, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { documents } from 'src/app/services/document.model';
import { User } from 'src/app/services/user.model';
import {NgForm} from '@angular/forms';
import { UploadpdfComponent } from './dialog/uploadpdf/uploadpdf.component';

export interface DialogData {
  animal: string;
  name: string;
}

export interface PFDUploadData {
  uploaderNAME: any;
  title: string,
  uploadedBy: string,
  tlb: string,
  url: string,
  shortDesc: string,
  reviewDate: Date,
  dateRecordCreated: Date,
  dateRecordUpdated:Date,
  datePublicationCreated:Date,
  datePublicationUpdated:Date,
  state: string,
  classification: string,
  processedPublicationObject:string,
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  user = this.auth.getUser()
  userCollection: AngularFirestoreCollection<User>
  users: Observable<any[]>
  documentCollection: AngularFirestoreCollection<documents>
  documents: Observable<any[]>
  test: any
  animal: string;
  name: string;
  //get top role 
  userCurrent = this.auth.getUser()
  role: any
  // pdf upload 
  uploaderNAME: any;
  title: string
  uploadedBy: string
  tlb: string
  url: string
  shortDesc: string
  reviewDate: Date
  dateRecordCreated: Date
  dateRecordUpdated:Date
  datePublicationCreated:Date
  datePublicationUpdated:Date
  state: string
  classification: string
  processedPublicationObject:string
  // tags: any;
  datapass: any;

  constructor(public afAuth: AngularFireAuth, public auth: AuthService, public afs: AngularFirestore, public dialog: MatDialog) {}

  topRole(){
    const testitem = this.userCurrent.then(x => {return x})
    console.log(testitem, this.role)
  }
  
  //dialog stuff here 
  openDialog(): void {
    const dialogRef = this.dialog.open(UploadpdfComponent, {
      width: '50vw',
      data: {
        // start
        title: this.title,
        uploadedBy: this.uploaderNAME,
        tlb: this.tlb,
        url: this.url,
        shortDesc: this.shortDesc,
        reviewDate: this.reviewDate
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.title = result;
    });
  }
  //end dialog 

  removeData(){
    console.log("not working untill Mongo is working")
  }

  ngOnInit(): void {
    this.userCollection = this.afs.collection('users')
    this.users = this.userCollection.valueChanges()
    this.documentCollection = this.afs.collection('documents')
    this.documents = this.documentCollection.valueChanges()
    // this.test = this.userCollection.valueChanges().subscribe( x => {
    //   console.log(x)
    // })

    // this.test = this.afAuth.user.subscribe(x => {console.log(x.uid)})
    this.user.then(x => {this.role = x})

    this.topRole()

  }
}
