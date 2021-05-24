import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  showProfilePage = false;
  constructor() {}

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
    this.showProfilePage = (ev.detail.value === 'profile');
  }
}
