import { Component, Inject, OnInit } from '@angular/core';
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

  x = "https://alexandria-back.herokuapp.com/publications"
  data: any = [{"temp": "temp"}]
  
  showGet(){
    return this.http.get(this.x).subscribe((x: any) =>this.data = x).add(() => { return this.data})
  }

  async testPost(){
    const formValue = {
      "title": "JSP 752 Tri-Service Regulations for Expenses and Allowances",
      "uploadedBy": " Joseph M Lanzon",
      "tlb": "MOD",
      "url": "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1022200/20211001-JSP_752_v48_Oct_21.pdf",
      "shortDesc": "\t\tJSP 752 is the authoritative policy and guidance document designed for use by all Service\nPersonnel, the Chain of Command and specialist administration staff to determine\nentitlement to expenses and allowances. It is important that all Service Personnel remain\naware of current regulations for expenses and allowances and they should keep\nthemselves informed of any policy changes that may affect them.",
      "reviewDate": "2022-03-31T23:00:00.000Z",
      "dateRecordCreated": "Tue Dec 14 2021 13:25:37 GMT+0000 (Greenwich Mean Time)",
      "dateRecordUpdated": "Not Updated Yet",
      "datePublicationCreated": "Tue Dec 14 2021 13:25:37 GMT+0000 (Greenwich Mean Time)",
      "datePublicationUpdated": "Not Updated Yet",
      "state": "pending",
      "classification": "Unclass",
      "processedPublicationObject": "?"
  }
    try {
      await this.http.post("https://alexandria-back.herokuapp.com/publications", formValue).subscribe()
      console.log(formValue)
    } catch (error) {
      console.log(error)
      console.log(formValue, )
    }
   }


  ngOnInit(): void {
    console.log("Page loaded");
  }


}
