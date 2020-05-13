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
  loading = false;

  cansendForm = true;
  formClosed = false;

  inputName = '';
  inputOrg = '';
  inputFunction = '';
  inputEmail = '';
  inputAcc = 1;
  inputBig = '';
  formIsSend = false;

  errorOnSend = false;

  constructor(private serCred: SerCredService) { }

  ngOnInit() {
    this.loading = true;
    this.serCred.API_howmany().subscribe(value => this.howMany(value));

    this.errorOnSend = false;
    addeventatc.refresh();
    window.scrollTo(0, 0);
  }

  howMany(_resp){
    const tonumb = +_resp.status;
    this.serCred.debugLog(_resp);
    console.log(tonumb);
    if (tonumb >= 500){
      this.cansendForm = false;
      this.formClosed = true;
    } else {
      this.cansendForm = true;
    }
    this.loading = false;
  }


  sendFormNow() {
    if (this.inputName !== '' && this.inputName !== null && this.inputOrg !== '' && this.inputOrg !== null && this.inputFunction !== '' && this.inputFunction !== null && this.inputEmail !== '' && this.inputEmail !== null){
      if (this.inputAcc !== 1){
        this.inputBig = '-';
      }
      
      this.serCred.API_submitform(this.inputName, this.inputOrg, this.inputFunction, this.inputEmail, this.inputAcc, this.inputBig).subscribe(value => this.formResponse(value));
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
