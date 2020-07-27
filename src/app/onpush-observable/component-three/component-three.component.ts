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
  selector: 'cmp-three',
  template: `
    <a class="on-push" (click)="(null)">Cmp3</a>

    <ul>
      <li>
        <cmp-six></cmp-six>
      </li>
      <li>
        <cmp-seven [model]="model"></cmp-seven>
      </li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentThree implements AfterViewChecked {
  @Input() model: Subject<any>;
  
  constructor(
    private zone: NgZone,
    private el: ElementRef,
    private toggleService: ToggleService
  ) {}

  ngAfterViewChecked() {
    this.toggleService.onchange(this.el, this.zone);
    console.log('ngAfterViewChecked: Cmp3')
  }
}
