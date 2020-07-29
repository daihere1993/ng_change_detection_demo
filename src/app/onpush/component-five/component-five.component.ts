import {
  Component,
  OnInit,
  NgZone,
  ElementRef,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { BaseComponent } from 'src/app/base.component';

@Component({
  selector: 'cmp-five',
  template: `
    <a class="on-push" [class.checked]="n" (click)="(null)">Cmp5</a>

    <ul>
      <li>
        <cmp-ten></cmp-ten>
      </li>
      <li>
        <cmp-eleven></cmp-eleven>
      </li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentFive extends BaseComponent implements OnInit {
  @Input() data: { name: string };
  
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
