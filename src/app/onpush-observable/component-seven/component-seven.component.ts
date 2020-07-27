import {
  Component,
  AfterViewChecked,
  NgZone,
  ElementRef,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { ToggleService } from 'src/app/toggle.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'cmp-seven',
  template: `
    <a class="on-push" (click)="emitAndTriggerChangeDetection()">Cmp7</a>
    <ul>
      <li>
        <cmp-fourteen></cmp-fourteen>
      </li>
      <li>
        <cmp-fifteen></cmp-fifteen>
      </li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentSeven implements AfterViewChecked {
  @Input() model: Subject<any>;

  constructor(
    private zone: NgZone,
    private el: ElementRef,
    private toggleService: ToggleService
  ) {}

  ngAfterViewChecked() {
    this.toggleService.onchange(this.el, this.zone);
    console.log('ngAfterViewChecked: Cmp6');
  }

  emitAndTriggerChangeDetection() {
    this.model.next(null);
  }
}
