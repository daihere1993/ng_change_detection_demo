import { Component, AfterViewChecked, NgZone, ElementRef } from '@angular/core';
import { ToggleService } from 'src/app/toggle.service';

@Component({
  selector: 'cmp-one',
  template: `
    <a (click)="(null)">Cmp1</a>

    <ul>
      <li>
        <cmp-two></cmp-two>
      </li>
      <li>
        <cmp-three></cmp-three>
      </li>
    </ul>
  `,
})
export class ComponentOne implements AfterViewChecked {
  constructor(
    private zone: NgZone,
    private el: ElementRef,
    private toggleService: ToggleService
  ) {}

  ngAfterViewChecked() {
    this.toggleService.onchange(this.el, this.zone);
  }
}
