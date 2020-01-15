import { Component, OnInit } from '@angular/core';
declare const addeventatc: any;
@Component({
  selector: 'app-inschrijven',
  templateUrl: './inschrijven.component.html',
  styleUrls: ['./inschrijven.component.css']
})



export class InschrijvenComponent implements OnInit {

  // vars

  formIsSend = false;

  constructor() { }

  ngOnInit() {
    addeventatc.refresh();
    window.scrollTo(0, 0);
  }


  sendFormNow() {
    
    this.formIsSend = true;
    addeventatc.refresh();
  }

}
