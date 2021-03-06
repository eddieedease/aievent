import { Component, ViewChild  } from '@angular/core';


import { ModalDirective } from 'ngx-bootstrap/modal';

declare global {
  interface Document {
      documentMode?: any;
  }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'eventai';

  // modalRef
  @ViewChild('autoShownModal', { static: false }) autoShownModal: ModalDirective;
  isModalShown = false;

  


  constructor() {
    
    

    $(document).ready(() => {

      setTimeout(this.myFunction, 1000);
      

    });
    // this.showModal();
  }

  


  



  showModal(): void {
    this.isModalShown = true;
  }
 
  hideModal(): void {
    this.autoShownModal.hide();
  }
 
  onHidden(): void {
    this.isModalShown = false;
  }


  myFunction(){
    console.log("ok");
    
    if($('.main-header li.dropdown ul').length){
      $('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
    }
  
    // Mobile Nav Hide Show
    if ($('.mobile-menu').length) {
      console.log("huh");
      const mobileMenuContent = $('.main-header .nav-outer .main-menu .navigation').html();
      $('.mobile-menu').append('<div class="close-btn"><span class="icon flaticon-cancel-music"></span></div>');
      $('.mobile-menu .navigation').append(mobileMenuContent);
      $('.sticky-header .navigation').append(mobileMenuContent);
      $('.mobile-menu .close-btn').on('click', () => {
        $('body').removeClass('mobile-menu-visible');
      });
      // Dropdown Button
      $('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
        $(this).prev('ul').slideToggle(500);
      });
      // Menu Toggle Btn
      $('.mobile-nav-toggler').on('click', () => {
        $('body').addClass('mobile-menu-visible');
      });
  
      // Menu Toggle Btn
      $('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', () => {
        $('body').removeClass('mobile-menu-visible');
      });
    }
  }





  

}
