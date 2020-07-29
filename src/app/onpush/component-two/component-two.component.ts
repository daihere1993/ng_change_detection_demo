import {
  Component,
  OnInit,
  NgZone,
  ElementRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { BaseComponent } from 'src/app/base.component';

@Component({
  selector: 'cmp-two',
  template: `
    <a class="on-push" [class.checked]="n" (click)="onClick()">Cmp2</a>

    <ul>
      <li>
        <cmp-four [data]="data"></cmp-four>
      </li>
      <li>
        <cmp-five [data]="data"></cmp-five>
      </li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentTwo extends BaseComponent implements OnInit {
  data: { name: string };

  constructor(
    zone: NgZone,
    private el: ElementRef,
  ) {
    super(zone)
  }

  onClick() {
    this.data = { name: 'test' };
  }

  ngOnInit() {
    this.a = this.el.nativeElement.querySelector('a');
  }
}
