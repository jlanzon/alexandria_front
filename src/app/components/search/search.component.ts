import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { interval, Observable, timer } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { documents } from 'src/app/services/document.model';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/services/user.model';
import {NgForm} from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  document = "Publications"
  user = AuthService
  userCollection: AngularFirestoreCollection<User>
  users: Observable<any[]>
  documentCollection: AngularFirestoreCollection<documents>
  documents: Observable<any[]>
  userCurrent = this.auth.getUser()


  pdfSrc: string = '../../../assets/jsp834.png';

  constructor(public afAuth: AngularFireAuth, public auth: AuthService, public afs: AngularFirestore, private http: HttpClient) { }


  x = "https://alexandria-back.herokuapp.com/publications"
  data: any = [{"temp": "temp"}]

  showGet(){
    return this.http.get(this.x).subscribe((x: any) =>this.data = x).add(() => { return this.data})
  }


  async searchTerm(f: NgForm){
    try {
      await this.http.post("https://alexandria-back.herokuapp.com/publications", f.value).subscribe()
      console.log(f.value)
    } catch (error) {
      console.log(f.value)
      console.log(f.value )
    }
  }

  async addFav(id){
    console.log(id)
    const data = {
      Fav: id
    }
    const UID = (await this.userCurrent).uid
    console.log(UID)
    try {
           await this.afs.doc(`users/${UID}`).set(data, { merge: true });
         } catch (error) {
           console.log(error)
         }



  //        const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
  // const data: User = {
  //   verified: false,
  //   rank: "not configured",
  //   displayname: "not configured",
  //   uid: user.uid,
  //   email: user.email,
  //   role: {
  //     reader: true
  //   }
  // }
  // return userRef.set(data, { merge: true })
  }

  ngOnInit(): void {
    this.userCollection = this.afs.collection('users')
    this.users = this.userCollection.valueChanges()
    this.documentCollection = this.afs.collection('documents')
    this.documents = this.documentCollection.valueChanges()
    this.showGet()
  }

}
