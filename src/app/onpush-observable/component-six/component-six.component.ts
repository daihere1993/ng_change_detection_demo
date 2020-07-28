// tslint:disable:component-selector
// tslint:disable:component-class-suffix

import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NgZone,
  OnInit,
} from '@angular/core';
import { toggleClass } from '../../toggle-class.service';
import { BasicComponent } from '../basic-component';

@Component({
  selector: 'cmp-six',
  template: `
    <a class="on-push">Cmp6</a>

    <ul>
      <li>
        <cmp-twelve [class.checked]="flag > 0" (click)="(null)"></cmp-twelve>
      </li>
      <li>
        <cmp-thirteen [class.checked]="flag > 0" (click)="(null)"></cmp-thirteen>
      </li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentSix extends BasicComponent implements OnInit {
  constructor(zone: NgZone, private el: ElementRef) {
    super(zone);
  }

  ngOnInit() {
    this.a = this.el.nativeElement.querySelector('a');
  }
}
