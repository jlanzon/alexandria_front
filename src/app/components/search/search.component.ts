import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  document = "Publications"

  pdfSrc: string = '../../../assets/jsp834.png';

  constructor() { }

  ngOnInit(): void {

  }

}
