import {
  Component,
  AfterViewChecked,
  NgZone,
  ElementRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ToggleService } from 'src/app/toggle.service';

@Component({
  selector: 'cmp-five',
  template: `
    <a class="on-push" (click)="(null)">Cmp5</a>

    <ul>
      <li>
        <cmp-ten></cmp-ten>
      </li>
      <li>
        <cmp-eleven></cmp-eleven>
      </li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentFive implements AfterViewChecked {
  constructor(
    private zone: NgZone,
    private el: ElementRef,
    private toggleService: ToggleService
  ) {}

  ngAfterViewChecked() {
    this.toggleService.onchange(this.el, this.zone);
  }
}
