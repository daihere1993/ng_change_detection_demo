import {
  Component,
  AfterViewChecked,
  NgZone,
  ElementRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ToggleService } from 'src/app/toggle.service';

@Component({
  selector: 'cmp-thirteen',
  template: ` <a class="on-push" (click)="(null)">Cmp13</a> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentThirteen implements AfterViewChecked {
  constructor(
    private zone: NgZone,
    private el: ElementRef,
    private toggleService: ToggleService
  ) {}

  ngAfterViewChecked() {
    this.toggleService.onchange(this.el, this.zone);
    console.log('ngAfterViewChecked: Cmp13')
  }
}
