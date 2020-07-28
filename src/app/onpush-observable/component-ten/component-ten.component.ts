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
import { toggleClass } from '../..//toggle-class.service';
import { BasicComponent } from '../basic-component';

@Component({
  selector: 'cmp-ten',
  template: ` <a class="on-push" [class.checked]="flag > 0" (click)="(null)">Cmp10</a> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentTen extends BasicComponent implements OnInit {
  constructor(zone: NgZone, private el: ElementRef) {
    super(zone);
  }

  ngOnInit() {
    this.a = this.el.nativeElement.querySelector('a');
  }

  triggerChangeDetection() {}
}
