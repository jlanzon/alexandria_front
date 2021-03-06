import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, public auth: AuthService) { }

  user = AuthService

  ngOnInit(): void {
  }

  logOut(){
    this.afAuth.signOut();
  }

}
