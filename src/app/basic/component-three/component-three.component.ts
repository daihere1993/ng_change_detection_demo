import { Component, AfterViewChecked, NgZone, ElementRef } from '@angular/core';
import { ToggleService } from 'src/app/toggle.service';

@Component({
  selector: 'cmp-three',
  template: `
    <a (click)="(null)">Cmp3</a>

    <ul>
      <li>
        <cmp-six></cmp-six>
      </li>
      <li>
        <cmp-seven></cmp-seven>
      </li>
    </ul>
  `,
})
export class ComponentThree implements AfterViewChecked {
  constructor(
    private zone: NgZone,
    private el: ElementRef,
    private toggleService: ToggleService
  ) {}

  ngAfterViewChecked() {
    this.toggleService.onchange(this.el, this.zone);
  }
}
