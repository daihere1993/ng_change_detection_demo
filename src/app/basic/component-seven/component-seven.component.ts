import { Component, AfterViewChecked, NgZone, ElementRef } from '@angular/core';
import { ToggleService } from 'src/app/toggle.service';

@Component({
  selector: 'cmp-seven',
  template: `
    <a (click)="(null)">Cmp7</a>
  `,
})
export class ComponentSeven implements AfterViewChecked {
  constructor(
    private zone: NgZone,
    private el: ElementRef,
    private toggleService: ToggleService
  ) {}

  ngAfterViewChecked() {
    this.toggleService.onchange(this.el, this.zone);
  }
}
