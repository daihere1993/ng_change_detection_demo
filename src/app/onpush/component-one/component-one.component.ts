import {
  Component,
  NgZone,
  ElementRef,
  ChangeDetectionStrategy,
  OnInit,
} from '@angular/core';
import { BaseComponent } from 'src/app/base.component';

@Component({
  selector: 'cmp-one',
  template: `
    <a class="on-push" [class.checked]="n" (click)="(null)">Cmp1</a>

    <ul>
      <li>
        <cmp-two></cmp-two>
      </li>
      <li>
        <cmp-three></cmp-three>
      </li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentOne extends BaseComponent implements OnInit {
  constructor(
    zone: NgZone,
    private el: ElementRef,
  ) {
    super(zone);
  }

  ngOnInit() {
    this.a = this.el.nativeElement.querySelector('a');
  }
}
