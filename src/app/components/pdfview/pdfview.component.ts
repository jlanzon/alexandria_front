import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdfview',
  templateUrl: './pdfview.component.html',
  styleUrls: ['./pdfview.component.css']
})
export class PdfviewComponent implements OnInit {

  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  DocumentTitle = "Document Title"

  constructor() { }

  ngOnInit(): void {
  }

}
