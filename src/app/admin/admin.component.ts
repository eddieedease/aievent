import {
  Component,
  TemplateRef,
  OnInit,
  ViewChild
} from '@angular/core';

import {
  BsModalService
} from 'ngx-bootstrap/modal';
import {
  BsModalRef
} from 'ngx-bootstrap/modal/bs-modal-ref.service';

import {
  DatatableComponent
} from '@swimlane/ngx-datatable';

import {
  SerCredService
} from '../ser-cred.service';

import {
  environment
} from '../../environments/environment';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  @ViewChild(DatatableComponent,  {static: false}) table: DatatableComponent;

  adminisLoggedIn = false;

  admId;
  admPwd;


  loading = false;

  groupListUsers = [];
  columns;
  tempgroupListUsers = [];

  // modalRef
  modalRef: BsModalRef;

  editCompleteCheck = false;


  tableMessages = {
    emptyMessage: `
      <div>
        <span class="classname">Geen resultaten gevonden</span>
      </div>
    `
  };


  // Current User keeping
  currentUserName = "";
  currentUserEmail= "";
  currentUserOrganisation= "";
  currentUserFunction = "";
  currentUserAcc = 0;
  currentUserId = "";



  constructor(private serCred: SerCredService, private modalService: BsModalService) {}

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  adminLoginAttempt() {
    // TODO: Implement ADMIN LOGIN
    if (this.admPwd !== '') {
      if (this.admPwd === 'goudvis'){
      // TODO: REMOVE
      this.adminisLoggedIn = true;
      this.gotLoginResponse();
      } else {
        this.admPwd = '';
      }
    }
  }

  // TODO: catch on suceesss
  gotLoginResponse() {
    this.modalRef.hide();
    // now get users
    this.serCred.API_getusers().subscribe(value => this.getusersResonse(value));

    /* 
      this.edSer.debugLog(_event);

      if (_event.status === 'failed') {
        this.showLoginSpinner = false;
        this.toastr.info('Niet geldig', 'Helaas');
      } else {
        this.edSer.__loggedIn = true;
        
        if (_event.type === '2') {
          this.modalRef.hide();
          this.edSer.debugLog('Admin is logged in');
          this.toastr.success('Welkom', 'Admin');
          this.adminisLoggedIn = true;
          this.edSer.API_getresearch().subscribe(value => this.gotResearches(value));
          this.edSer.API_getadminemail().subscribe(value => this.gotAdminEmail(value));

        }
        // TODO: Check if is ok
        this.showLoginSpinner = false;
      } */
  }


  getusersResonse(_resp){
    this.groupListUsers = _resp[0];
   this.tempgroupListUsers = [..._resp[0]];
   this.loading = false;
  }


  // modal
  openModal(template: TemplateRef < any > ) {
    console.log(template);
    this.modalRef = this.modalService.show(template);
  }


    // Functionality for the searching filter in the tables
    updateFilter(_type, event) {
      this.serCred.debugLog(event);
      const val = event.target.value.toLowerCase();
      // lets switch it up ;)
      // in what table are we searching
      switch (_type) {
        case 'naam':
          // filter our data
          const temp = this.tempgroupListUsers.filter(function (d) {
            return d.naam.toLowerCase().indexOf(val) !== -1 || !val;
          });
          // update the rows
          this.groupListUsers = temp;
          break;
          case 'email':
          // filter our data
          const temp1 = this.tempgroupListUsers.filter(function (d) {
            return d.email.toLowerCase().indexOf(val) !== -1 || !val;
          });
          // update the rows
          this.groupListUsers = temp1;
          break;
          
      }
      // Whenever the filter changes, always go back to the first page
      this.table.offset = 0;
    }


  openLargeModal(template: TemplateRef < any > , _whichwhat, _id) {

  }

  sureModal(_case) {

  }

  openUserEditModal(template: TemplateRef < any > , _id){
    this.editCompleteCheck = false;
    this.currentUserId = _id;
    this.loading = true;
     this.modalRef = this.modalService.show(template);
    // set currentUser data, loop through users
    this.groupListUsers.forEach(element => {
        if (element.id === _id){
          this.currentUserName = element.naam;
          this.currentUserEmail = element.email;
          this.currentUserFunction = element.functie;
          this.currentUserOrganisation = element.organisatie;
          this.currentUserAcc = +element.acc;
        }
    });
    this.loading = false;
  }

  editUser(){

    if (this.currentUserName !== '' && this.currentUserEmail !== '' && this.currentUserFunction !== '' && this.currentUserOrganisation !== ''){
      this.loading = true;
      this.serCred.API_edituser(this.currentUserId, this.currentUserName, this.currentUserEmail, this.currentUserOrganisation, this.currentUserFunction, this.currentUserAcc).subscribe(value => this.userEditted(value));

    }

  }

  userEditted(_resp){
    this.serCred.debugLog(_resp);
    this.editCompleteCheck = true;
    this.loading = false;
    // get users again
    this.serCred.API_getusers().subscribe(value => this.getusersResonse(value));
  }

  LogOut(){

  }


  openSureModal(template: TemplateRef < any > , _id){

  }

}
