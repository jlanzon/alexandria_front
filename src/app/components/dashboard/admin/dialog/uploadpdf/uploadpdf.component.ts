import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminComponent, DialogData, PFDUploadData } from '../../admin.component';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

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
  TxtError: any = ""
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
    public auth: AuthService,
    private http: HttpClient
    ) {

      
    }

  onNoClick(): void {
    this.dialogRef.close();
  }


//  async onSubmit() {
//    this.loading = true;
//    const formValue = this.data
//    formValue.uploadedBy = this.userdata.displayname
//    try {
//      await this.afs.collection('documents').add(formValue);
//      this.success = true
//      this.dialogRef.close();
//    } catch (error) {
//      this.TxtError = error
//      console.log(error)
//      console.log(formValue, )
//    }
//   }

async onSubmit(datauploadpdf) {
     this.loading = true;
     const formValue = this.data
     formValue.uploadedBy = this.userdata.displayname
     try {
       await this.http.post("https://alexandria-back.herokuapp.com/publications", formValue).subscribe()
       this.success = true
       this.dialogRef.close();
       console.log(formValue);
       
     } catch (error) {
       this.TxtError = error
       console.log(error)
       console.log(formValue, )
     }
    }


  ngOnInit(): void {
    this.user.then(x => {this.userdata = x})
  }

}
