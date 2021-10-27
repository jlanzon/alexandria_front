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
  pdfName: string;
  link: string;
  serviceUploader: string;
  description: string;
  tags: any;
  uploaderUID: string;
  uploaderEMAIL: string;
  uploaderNAME: string;
}

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

  animal: string;
  name: string;


  // pdf upload 
  pdfName: string;
  link: string;
  serviceUploader: string;
  description: string;
  // tags: any;
  uploaderUID: string;
  uploaderEMAIL: string;
  uploaderNAME: string;
  datapass: any;

  constructor(public afAuth: AngularFireAuth, public auth: AuthService, public afs: AngularFirestore, public dialog: MatDialog) {}


  //dialog stuff here 
  openDialog(): void {
    const dialogRef = this.dialog.open(UploadpdfComponent, {
      width: '50vw',
      data: {
        pdfName: this.pdfName,
        link: this.link,
        serviceUploader: this.serviceUploader,
        description: this.description,
        // tags:this.tags,
        uploaderUID: this.uploaderUID,
        uploaderEMAIL:this.uploaderEMAIL,
        uploaderNAME: this.uploaderNAME
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.pdfName = result;
    });
  }
  //end dialog 

  ngOnInit(): void {
    this.userCollection = this.afs.collection('users')
    this.users = this.userCollection.valueChanges()
    this.documentCollection = this.afs.collection('documents')
    this.documents = this.documentCollection.valueChanges()
    // this.test = this.userCollection.valueChanges().subscribe( x => {
    //   console.log(x)
    // })

    // this.test = this.afAuth.user.subscribe(x => {console.log(x.uid)})
    console.log(this.test)
    this.documentCollection = this.afs.collection('documents')
    this.documents = this.documentCollection.valueChanges()

  }
}
