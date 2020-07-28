// tslint:disable:component-selector
// tslint:disable:component-class-suffix

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
  selector: 'cmp-three',
  template: `
    <a class="on-push">Cmp3</a>

    <ul>
      <li>
        <cmp-six [class.checked]="flag > 0" (click)="(null)"></cmp-six>
      </li>
      <li>
        <cmp-seven
          [model]="model"
          [class.checked]="flag > 0"
          (click)="(null)"
        ></cmp-seven>
      </li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentThree extends BasicComponent implements OnInit {
  @Input() model: Subject<any>;

  constructor(zone: NgZone, private el: ElementRef) {
    super(zone);
  }

  ngOnInit() {
    this.a = this.el.nativeElement.querySelector('a');
  }
}
