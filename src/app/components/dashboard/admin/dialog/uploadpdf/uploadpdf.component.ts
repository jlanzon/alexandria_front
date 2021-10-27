import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminComponent, DialogData, PFDUploadData } from '../../admin.component';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap, first, map } from 'rxjs/operators';
import { Router } from '@angular/router';



@Component({
  selector: 'app-uploadpdf',
  templateUrl: './uploadpdf.component.html',
  styleUrls: ['./uploadpdf.component.css']
})
export class UploadpdfComponent implements OnInit {

  tags: string
  user = this.auth.getUser()  
  documentCollection: AngularFirestoreCollection<any>;

  loading = false
  success = false

  userdata: any 

  // uploaderEMAIL: 
  // uploaderNAME: undefined
  // uploaderUID: undefined
  


  constructor(
    public dialogRef: MatDialogRef<AdminComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PFDUploadData,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    public auth: AuthService
    ) {

      
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  // async getUserData(){
  //   this.afAuth.user.subscribe((x) => this.email = x.email)
  //   this.afAuth.user.subscribe((x) => this.uid = x.uid)
  //   this.afAuth.user.subscribe((x) => this.name = x.displayName)
  //   console.log("working")
  // }

 async onSubmit(datauploadpdf) {
   this.loading = true;
   const formValue = this.data
   formValue.uploaderEMAIL = this.userdata.email
   formValue.uploaderUID = this.userdata.uid
   formValue.uploaderNAME = this.userdata.displayname
   try {
     await this.afs.collection('documents').add(formValue);
     this.success = true
   } catch (error) {
     console.log(error)
     console.log(formValue, )
   }
  }

  ngOnInit(): void {
    this.user.then(x => {this.userdata = x})
  }

}
