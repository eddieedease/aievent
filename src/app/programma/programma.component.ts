import { Component, OnInit } from '@angular/core';
import {WOW} from '../../assets/js/wow.js';


@Component({
  selector: 'app-programma',
  templateUrl: './programma.component.html',
  styleUrls: ['./programma.component.css']
})
export class ProgrammaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(() => {
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
  }

}
