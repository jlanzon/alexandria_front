import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private auth: AuthService) { }

   user = AuthService
  
  ngOnInit(): void {

    console.log(this.auth.userInfo(this.afAuth))
  }

}
