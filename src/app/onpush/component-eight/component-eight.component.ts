import {
  Component,
  OnInit,
  NgZone,
  ElementRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { BaseComponent } from 'src/app/base.component';

@Component({
  selector: 'cmp-eight',
  template: `
    <a class="on-push" [class.checked]="n" (click)="(null)">Cmp8</a>
    <ul>
      <li>
        <cmp-sixteen></cmp-sixteen>
      </li>
      <li>
        <cmp-seventeen></cmp-seventeen>
      </li>
   </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentEight extends BaseComponent implements OnInit {
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
