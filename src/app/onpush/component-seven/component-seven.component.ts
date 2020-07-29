import {
  Component,
  OnInit,
  NgZone,
  ElementRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { BaseComponent } from 'src/app/base.component';

@Component({
  selector: 'cmp-seven',
  template: `
    <a class="on-push" [class.checked]="n" (click)="(null)">Cmp7</a>
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
export class ComponentSeven extends BaseComponent implements OnInit {
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
