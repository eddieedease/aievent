import {
  Component,
  OnInit
} from '@angular/core';

import {WOW} from '../../assets/js/wow.js';

declare const addeventatc: any;

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    window.scrollTo(0, 0);
    // owl carousel
    $(document).ready(() => {
      if ($('.banner-carousel').length) {
        ($('.banner-carousel') as any).owlCarousel({
          animateOut: 'fadeOut',
          animateIn: 'fadeIn',
          loop: false,
          margin: 0,
          nav: true,
          drag: false,
          smartSpeed: 500,
          autoHeight: true,
          autoplay: true,
          autoplayTimeout: 5000,
          navText: ['<span class="fa fa-angle-left">', '<span class="fa fa-angle-right">'],
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 1
            },
            1024: {
              items: 1
            },
          }
        });
      }

      if ($('.main-header').length) {
        const windowpos = $(window).scrollTop();
        const siteHeader = $('.main-header');
        const scrollLink = $('.scroll-to-top');
        if (windowpos >= 1) {
          siteHeader.addClass('fixed-header');
          scrollLink.fadeIn(300);
        } else {
          siteHeader.removeClass('fixed-header');
          scrollLink.fadeOut(300);
        }
      }

      

      if ($('.time-countdown').length){
        $('.time-countdown').each(function() {
        // tslint:disable-next-line:one-variable-per-declaration
        const $this = $(this), finalDate = $(this).data('countdown');

        ($this as any).countdown(finalDate, function(event) {
          // tslint:disable-next-line:max-line-length
          // tslint:disable-next-line:no-shadowed-variable
          const $this = $(this).html(event.strftime('' + '<div class="counter-column"><span class="count">%D</span>Dagen</div>'));
          const ok = typeof($this);
        });
       });
      }

      if ($('.wow').length){
        const wow = new WOW(
          {
          boxClass:     'wow',      // animated element css class (default is wow)
          animateClass: 'animated', // animation css class (default is animated)
          offset:       0,          // distance to the element when triggering the animation (default is 0)
          mobile:       true,       // trigger animations on mobile devices (default is true)
          live:         true       // act on asynchronously loaded content (default is true)
          }
        );
        wow.init();
      }

    });
    addeventatc.refresh();

  }

}
