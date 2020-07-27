import {
  Component,
  AfterViewChecked,
  NgZone,
  ElementRef,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { ToggleService } from 'src/app/toggle.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'cmp-one',
  template: `
    <a class="on-push" (click)="(null)">Cmp1</a>

    <ul>
      <li>
        <cmp-two [model]="model"></cmp-two>
      </li>
      <li>
        <cmp-three [model]="model"></cmp-three>
      </li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentOne implements AfterViewChecked {
  @Input() model: Subject<any>;
  
  constructor(
    private zone: NgZone,
    private el: ElementRef,
    private toggleService: ToggleService
  ) {}

  ngAfterViewChecked() {
    this.toggleService.onchange(this.el, this.zone);
    console.log('ngAfterViewChecked: Cmp1')
  }
}
