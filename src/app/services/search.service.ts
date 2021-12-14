import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public data: any = []
  public returnData: any = []

  constructor(private http: HttpClient) { }

  getGaz(x){
    return this.http.get(x).subscribe((x: any) =>this.data = x).add(() => { return this.data})
    // .add(() => )
  }


  
}
