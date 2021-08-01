import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(public afs: AngularFireAuth) { }

  ngOnInit(): void {
  }

  logOut(){
    this.afs.signOut();
  }

}
