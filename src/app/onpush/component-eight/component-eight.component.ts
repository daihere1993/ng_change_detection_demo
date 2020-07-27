import {
  Component,
  AfterViewChecked,
  NgZone,
  ElementRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ToggleService } from 'src/app/toggle.service';

@Component({
  selector: 'cmp-eight',
  template: `
    <a class="on-push" (click)="(null)">Cmp8</a>
    <ul>
      <li>
        <cmp-sixteen></cmp-sixteen>
      </li>
      <li>
        <cmp-seventeen></cmp-seventeen>
      </li>
   </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentEight implements AfterViewChecked {
  constructor(
    private zone: NgZone,
    private el: ElementRef,
    private toggleService: ToggleService
  ) {}

  ngAfterViewChecked() {
    this.toggleService.onchange(this.el, this.zone);
  }
}
