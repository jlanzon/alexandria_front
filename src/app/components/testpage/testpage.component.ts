import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/services/user.model';

@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.css']
})
export class TestpageComponent implements OnInit {

  canEdit;

  constructor(public auth: AuthService) { }


  printUser(){
    console.log(this.auth.user$)
  }

  ngOnInit() {
    }

  }
