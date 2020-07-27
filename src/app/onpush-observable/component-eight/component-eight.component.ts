import {
  Component,
  AfterViewChecked,
  NgZone,
  ElementRef,
  ChangeDetectionStrategy,
  Input,
  OnInit,
  AfterContentChecked,
} from '@angular/core';
import { ToggleService } from 'src/app/toggle.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'cmp-eight',
  template: `
    <a class="on-push" [ngClass]="flag ? 'checked' : 'normal'" (click)="(null)">Cmp8</a>
    <ul>
      <li>
        <cmp-sixteen></cmp-sixteen>
      </li>
   </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentEight implements OnInit, AfterViewChecked {
  flag = true;
  @Input() model: Subject<any>;

  constructor(
    private zone: NgZone,
    private el: ElementRef,
    private toggleService: ToggleService
  ) {}

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      setInterval(() => {
        const a = this.el.nativeElement.querySelector('a');
        a.classList.remove('checked');
      }, 1000);
    })
  }

  ngAfterViewChecked() {
    // this.toggleService.onchange(this.el, this.zone);
    console.log('ngAfterViewChecked: Cmp8')
  }
}
