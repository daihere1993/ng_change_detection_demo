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
  selector: 'cmp-one',
  template: `
    <a class="on-push">Cmp1</a>

    <ul>
      <li>
        <cmp-two [model]="model" [class.checked]="flag > 0" (click)="(null)"></cmp-two>
      </li>
      <li>
        <cmp-three [model]="model" [class.checked]="flag > 0" (click)="(null)"></cmp-three>
      </li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentOne extends BasicComponent implements OnInit {
  @Input() model: Subject<any>;

  constructor(zone: NgZone, private el: ElementRef) {
    super(zone);
  }

  ngOnInit() {
    this.a = this.el.nativeElement.querySelector('a');
  }
}
