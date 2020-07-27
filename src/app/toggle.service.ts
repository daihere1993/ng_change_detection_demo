import { Injectable, ElementRef, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToggleService {
  onchange(el: ElementRef, zone: NgZone): void {
    const a = el.nativeElement.querySelector('a');
    a.classList.add('checked');
    zone.runOutsideAngular(() => {
      setTimeout(() => {
        a.classList.remove('checked');
      }, 1000);
    });
  }
}
