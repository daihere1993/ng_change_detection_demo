import { NgZone } from '@angular/core';

export class BasicComponent {
  a: any;

  zone: NgZone

  _flag: number = 1;

  get flag(): number {
    this.a.classList.add('checked');
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        if (this.a.classList.contains('checked')) {
          this.a.classList.remove('checked');
        }
        this._flag++;
      }, 2000);
    });
    return this._flag;
  }

  constructor(zone: NgZone) {
    this.zone = zone;
  }
}
