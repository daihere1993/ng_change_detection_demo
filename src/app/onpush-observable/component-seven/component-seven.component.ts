// tslint:disable:component-selector
// tslint:disable:component-class-suffix
// tslint:disable:use-host-property-decorator

import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  NgZone,
  OnInit,
} from '@angular/core';
import { Subject } from 'rxjs';
import { toggleClass } from '../../toggle-class.service';
import { BasicComponent } from '../basic-component';

@Component({
  selector: 'cmp-seven',
  host: {
    '(click)': 'emitAndTriggerChangeDetection()',
  },
  template: `
    <a class="on-push click-me">Cmp7</a>

    <ul>
      <li>
        <cmp-fourteen
          [class.checked]="flag > 0"
          (click)="(null)"
        ></cmp-fourteen>
      </li>
      <li>
        <cmp-fifteen [class.checked]="flag > 0" (click)="(null)"></cmp-fifteen>
      </li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentSeven extends BasicComponent implements OnInit {
  @Input() model: Subject<any>;

  constructor(zone: NgZone, private el: ElementRef) {
    super(zone);
  }

  ngOnInit() {
    this.a = this.el.nativeElement.querySelector('a');
  }

  emitAndTriggerChangeDetection() {
    this.model.next(null);
  }
}
