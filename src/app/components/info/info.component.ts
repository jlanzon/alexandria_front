import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { HttpClient } from '@angular/common/http';


export interface Data {
  msg: string;
}

export interface RootObject {
  status: string;
  data: Data;
}

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(private Search: SearchService, private http: HttpClient) { }

  x = "https://alexandria-back.herokuapp.com/"
  data: any = [{"temp": "temp"}]
  
  showGet(){
    return this.http.get(this.x).subscribe((x: any) =>this.data = x).add(() => { return this.data})
  }

  ngOnInit(): void {
  }

}
