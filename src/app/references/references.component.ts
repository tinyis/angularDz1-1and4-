import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css']
})
export class ReferencesComponent implements OnInit {

  constructor() {
    this.refs=["https://en.wikipedia.org/wiki/Bill_Gates",
                "https://www.gatesfoundation.org/",
                "https://www.gatesnotes.com/",
                "https://twitter.com/billgates"];
  }

  ngOnInit(): void {
  }

  refs:string[];
}
