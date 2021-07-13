import { Component, Directive, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {

  // readonly ROOT_URL= 'https://digital.nhs.uk/restapi/CyberAlert'
  ROOT_URL= 'https://digital.nhs.uk/restapi/CyberAlert/?_limited=true'
  posts: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {}

  getPosts(){
    this.posts = this.http.get(this.ROOT_URL)
  }

}
