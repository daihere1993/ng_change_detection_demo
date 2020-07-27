import { Component, AfterViewChecked, NgZone, ElementRef } from '@angular/core';
import { ToggleService } from 'src/app/toggle.service';

@Component({
  selector: 'cmp-two',
  template: `
    <a (click)="(null)">Cmp2</a>

    <ul>
      <li>
        <cmp-four></cmp-four>
      </li>
      <li>
        <cmp-five></cmp-five>
      </li>
    </ul>
  `,
})
export class ComponentTwo implements AfterViewChecked {
  constructor(
    private zone: NgZone,
    private el: ElementRef,
    private toggleService: ToggleService
  ) {}

  ngAfterViewChecked() {
    this.toggleService.onchange(this.el, this.zone);
  }
}
