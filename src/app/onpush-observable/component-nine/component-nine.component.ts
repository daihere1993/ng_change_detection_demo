import {
  Component,
  AfterViewChecked,
  NgZone,
  ElementRef,
  ChangeDetectionStrategy,
  Input,
  OnInit,
} from '@angular/core';
import { ToggleService } from 'src/app/toggle.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'cmp-nine',
  template: `
    <a class="on-push" (click)="(null)">Cmp9-{{ test }}</a>
    <ul>
      <li>
        <cmp-seventeen [model]="model"></cmp-seventeen>
      </li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentNine implements OnInit, AfterViewChecked {
  test: number = 0;
  
  @Input() model: Subject<any>;

  constructor(
    private zone: NgZone,
    private el: ElementRef,
    private toggleService: ToggleService
  ) {}

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      setInterval(() => {
        this.test++;
      }, 1000);
    })
  }

  ngAfterViewChecked() {
    this.toggleService.onchange(this.el, this.zone);
    console.log('ngAfterViewChecked: Cmp9');
  }
}
