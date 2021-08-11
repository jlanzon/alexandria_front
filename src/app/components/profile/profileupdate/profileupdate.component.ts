import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profileupdate',
  templateUrl: './profileupdate.component.html',
  styleUrls: ['./profileupdate.component.css']
})
export class ProfileupdateComponent implements OnInit {

  user = AuthService

  iconon = "radio_button_checked"
  iconoff = "radio_button_unchecked"

  constructor(public afAuth: AngularFireAuth, public auth: AuthService) { }

  

  ngOnInit(): void {
    console.log(this.afAuth.currentUser.catch())
  }

}
