import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home2.page.html',
  styleUrls: ['home2.page.scss'],
})
export class Home2Page {
  slideOpts = {
    effect: 'flip'
  };
  constructor() { }
}
