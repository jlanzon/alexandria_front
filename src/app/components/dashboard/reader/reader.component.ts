import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { documents } from 'src/app/services/document.model';
import { User } from 'src/app/services/user.model';
import { UploadpdfComponent } from '../admin/dialog/uploadpdf/uploadpdf.component';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent implements OnInit {


  user = AuthService
  userCollection: AngularFirestoreCollection<User>
  users: Observable<any[]>
  documentCollection: AngularFirestoreCollection<documents>
  documents: Observable<any[]>
  test: any

  animal: string;
  name: string;


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

  x = "https://alexandria-back.herokuapp.com/publications"
  data: any = [{"temp": "temp"}]

  constructor(public afAuth: AngularFireAuth, public auth: AuthService, public afs: AngularFirestore, public dialog: MatDialog, private http: HttpClient) {}

  removeFav(){
    console.log("Remove does not work yet (Pending Mongo)")
  }

  showGet(){
    return this.http.get(this.x).subscribe((x: any) =>this.data = x).add(() => { return this.data})
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
        reviewDate: this.reviewDate,
        dateRecordCreated: Date(),
        dateRecordUpdated: "Not Updated Yet",
        datePublicationCreated: Date(),
        datePublicationUpdated:"Not Updated Yet",
        state: "pending",
        classification: "Unclass",
        processedPublicationObject: "?",
        
        // End
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.title = result;
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
    this.showGet()

  }

}
