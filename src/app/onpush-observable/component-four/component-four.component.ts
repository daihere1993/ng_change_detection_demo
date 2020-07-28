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
  selector: 'cmp-four',
  template: `
    <a class="on-push">Cmp4</a>

    <ul>
      <li>
        <cmp-eight [class.checked]="flag > 0" (click)="(null)"></cmp-eight>
      </li>
      <li>
        <cmp-nine [model]="model" [class.checked]="flag > 0" (click)="(null)"></cmp-nine>
      </li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentFour extends BasicComponent implements OnInit {
  @Input() model: Subject<any>;

  constructor(zone: NgZone, private el: ElementRef) {
    super(zone);
  }

  ngOnInit() {
    this.a = this.el.nativeElement.querySelector('a');
  }

  triggerChangeDetection() {}
}
