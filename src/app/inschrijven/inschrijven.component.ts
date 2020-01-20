import { Component, OnInit } from '@angular/core';

import {
  SerCredService
} from '../ser-cred.service';

declare const addeventatc: any;

@Component({
  selector: 'app-inschrijven',
  templateUrl: './inschrijven.component.html',
  styleUrls: ['./inschrijven.component.css']
})



export class InschrijvenComponent implements OnInit {

  // vars


  inputName = '';
  inputOrg = '';
  inputFunction = '';
  inputEmail = '';
  inputAcc = '';

  formIsSend = false;

  errorOnSend = false;

  constructor(private serCred: SerCredService) { }

  ngOnInit() {
    this.errorOnSend = false;
    addeventatc.refresh();
    window.scrollTo(0, 0);
  }


  sendFormNow() {
    if (this.inputName !== '' && this.inputName !== null && this.inputOrg !== '' && this.inputOrg !== null && this.inputFunction !== '' && this.inputFunction !== null && this.inputEmail !== '' && this.inputEmail !== null){
      this.serCred.API_submitform(this.inputName, this.inputOrg, this.inputFunction, this.inputEmail, this.inputAcc).subscribe(value => this.formResponse(value));
    } else {
      // not everything filled in communicatie
      this.errorOnSend = true;
    }
  }


  formResponse(_resp){
    this.errorOnSend = false;
    this.formIsSend = true;
    addeventatc.refresh();
    this.serCred.debugLog(_resp);
  }

}
