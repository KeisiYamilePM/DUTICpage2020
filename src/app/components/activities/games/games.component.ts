import { Component, OnInit } from '@angular/core';
import { PRIMARY_OUTLET } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class GamesComponent implements OnInit {

  images = ['https://i.ibb.co/18p43Nx/banner-olimpiadas-v1.jpg','https://i.ibb.co/3RrR502/Olimpiadas-2.jpg'];

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 7000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
}

  ngOnInit(): void {
  }

}
