import { NgZone, ElementRef } from '@angular/core';

export class BaseComponent {
  zone: NgZone;
  a: any;

  private _n = 1;

  get n(): number {
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        if (this.a.classList.contains('checked')) {
          this.a.classList.remove('checked');
        }
      }, 1000);
    });
    return this._n;
  }

  constructor(zone: NgZone) {
    this.zone = zone;
    this.zone.runOutsideAngular(() => {
      setInterval(() => {
        this._n++;
      }, 500);
    });
  }
}
