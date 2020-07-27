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
  selector: 'cmp-two',
  template: `
    <a class="on-push" (click)="(null)">Cmp2</a>

    <ul>
      <li>
        <cmp-four [model]="model"></cmp-four>
      </li>
      <li>
        <cmp-five></cmp-five>
      </li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentTwo implements AfterViewChecked {
  @Input() model: Subject<any>;

  constructor(
    private zone: NgZone,
    private el: ElementRef,
    private toggleService: ToggleService
  ) {}

  ngAfterViewChecked() {
    this.toggleService.onchange(this.el, this.zone);
    console.log('ngAfterViewChecked: Cmp2')
  }
}
