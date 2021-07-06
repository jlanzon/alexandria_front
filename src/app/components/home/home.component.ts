import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  readonly ROOT_URL= 'https://digital.nhs.uk/restapi/CyberAlert'
  posts: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {}

  getPosts(){
    this.posts = this.http.get(this.ROOT_URL + '/page')
  }

}
