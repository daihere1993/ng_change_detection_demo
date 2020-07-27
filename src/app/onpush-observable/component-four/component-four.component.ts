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
  selector: 'cmp-four',
  template: `
    <a class="on-push" (click)="(null)">Cmp4</a>
    <ul>
      <li>
        <cmp-eight [model]="model"></cmp-eight>
      </li>
      <li>
        <cmp-nine [model]="model"></cmp-nine>
      </li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentFour implements AfterViewChecked {
  @Input() model: Subject<any>;
  
  constructor(
    private zone: NgZone,
    private el: ElementRef,
    private toggleService: ToggleService
  ) {}

  ngAfterViewChecked() {
    this.toggleService.onchange(this.el, this.zone);
    console.log('ngAfterViewChecked: Cmp4')
  }
}
