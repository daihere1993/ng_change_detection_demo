import {
  Component,
  OnInit,
  NgZone,
  ElementRef,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { BaseComponent } from 'src/app/base.component';

@Component({
  selector: 'cmp-four',
  template: `
    <a class="on-push" [class.checked]="n" (click)="(null)">Cmp4</a>
    <ul>
      <li>
        <cmp-eight></cmp-eight>
      </li>
      <li>
        <cmp-nine></cmp-nine>
      </li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentFour extends BaseComponent implements OnInit {
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
