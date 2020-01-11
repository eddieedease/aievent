import {
  Component,
  TemplateRef,
  OnInit
} from '@angular/core';

import {
  BsModalService
} from 'ngx-bootstrap/modal';
import {
  BsModalRef
} from 'ngx-bootstrap/modal/bs-modal-ref.service';

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

  adminisLoggedIn = false;

  admId;
  admPwd;

  groupListUsers = [];
  tempgroupListUsers = [];

  // modalRef
  modalRef: BsModalRef;


  tableMessages = {
    emptyMessage: `
      <div>
        <span class="classname">Geen resultaten gevonden</span>
      </div>
    `
  };

  constructor(private serCred: SerCredService, private modalService: BsModalService) {}

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  adminLoginAttempt() {
    // TODO: Implement ADMIN LOGIN
    if (this.admId !== '' && this.admPwd !== '') {
      // Admin login responsibilities
      // TODO: 4 now simulate

      // this.edSer.API_login(this.admId, this.admPwd).subscribe(value => this.gotLoginResponse(value));

      /* setTimeout(() => {
        this.adminisLoggedIn = true;
        // TODO: With the research
        this.edSer.API_getresearch().subscribe(value => this.gotResearches(value));
        this.modalRef.hide();
      }, 1000); */
    }

    // TODO: REMOVE
    this.adminisLoggedIn = true;
  }

  // TODO: catch on suceesss
  gotLoginResponse(_event) {
    
    this.serCred.debugLog(_event);
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


  // modal
  openModal(template: TemplateRef < any > ) {
    console.log(template);
    this.modalRef = this.modalService.show(template);
  }

}
