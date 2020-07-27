import { Component, AfterViewChecked, NgZone, ElementRef } from '@angular/core';
import { ToggleService } from 'src/app/toggle.service';

@Component({
  selector: 'cmp-four',
  template: `
    <a (click)="(null)">Cmp4</a>
  `,
})
export class ComponentFour implements AfterViewChecked {
  constructor(
    private zone: NgZone,
    private el: ElementRef,
    private toggleService: ToggleService
  ) {}

  ngAfterViewChecked() {
    this.toggleService.onchange(this.el, this.zone);
  }
}
