import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-documentinfo',
  templateUrl: './documentinfo.component.html',
  styleUrls: ['./documentinfo.component.css']
})
export class DocumentinfoComponent implements OnInit {

  tiles: Tile[] = [
    {text: 'Document Title', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Document PDF', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
