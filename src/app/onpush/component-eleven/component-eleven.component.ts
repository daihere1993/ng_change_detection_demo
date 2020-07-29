import {
  Component,
  OnInit,
  NgZone,
  ElementRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { BaseComponent } from 'src/app/base.component';

@Component({
  selector: 'cmp-eleven',
  template: ` <a class="on-push" [class.checked]="n" (click)="(null)">Cmp11</a> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentEleven extends BaseComponent implements OnInit {
  constructor(
    zone: NgZone,
    private el: ElementRef,
  ) {
    super(zone)
  }

  ngOnInit() {
    this.a = this.el.nativeElement.querySelector('a');
  }
}
