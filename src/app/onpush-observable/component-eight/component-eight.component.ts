// tslint:disable:component-selector
// tslint:disable:component-class-suffix
import { BasicComponent } from '../basic-component';

import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NgZone,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'cmp-eight',
  template: `
    <a class="on-push" [class.checked]="flag > 0" (click)="(null)">Cmp8</a>

    <ul>
      <li>
        <cmp-sixteen></cmp-sixteen>
      </li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentEight extends BasicComponent implements OnInit {
  constructor(zone: NgZone, private el: ElementRef) {
    super(zone);
  }

  ngOnInit() {
    this.a = this.el.nativeElement.querySelector('a');
  }
}
