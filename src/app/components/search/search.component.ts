import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { interval, Observable, timer } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { documents } from 'src/app/services/document.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  document = "Publications"
  user = AuthService
  documentCollection: AngularFirestoreCollection<documents>
  documents: Observable<any[]>


  pdfSrc: string = '../../../assets/jsp834.png';

  constructor(public afAuth: AngularFireAuth, public auth: AuthService, public afs: AngularFirestore) { }

  ngOnInit(): void {
    this.documentCollection = this.afs.collection('documents')
    this.documents = this.documentCollection.valueChanges()
  }

}
