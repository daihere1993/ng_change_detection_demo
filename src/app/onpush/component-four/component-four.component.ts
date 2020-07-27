import {
  Component,
  AfterViewChecked,
  NgZone,
  ElementRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ToggleService } from 'src/app/toggle.service';

@Component({
  selector: 'cmp-four',
  template: `
    <a class="on-push" (click)="(null)">Cmp4</a>
    <ul>
      <li>
        <cmp-eight></cmp-eight>
      </li>
      <li>
        <cmp-nine></cmp-nine>
      </li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
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
