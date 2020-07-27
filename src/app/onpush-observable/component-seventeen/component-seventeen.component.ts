import {
  Component,
  AfterViewChecked,
  NgZone,
  ElementRef,
  ChangeDetectionStrategy,
  OnInit,
  ChangeDetectorRef,
  Input,
} from '@angular/core';
import { ToggleService } from 'src/app/toggle.service';
import { ModelService } from '../model.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'cmp-seventeen',
  template: ` <a class="on-push" (click)="(null)">Cmp17</a> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentSeventeen implements OnInit, AfterViewChecked {
  @Input() model: Subject<any>;
  
  constructor(
    private zone: NgZone,
    private el: ElementRef,
    private toggleService: ToggleService,
    private modelService: ModelService,
    private cd: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.model.subscribe(() => {
      this.cd.markForCheck();
    })
  }

  ngAfterViewChecked() {
    this.toggleService.onchange(this.el, this.zone);
    console.log('ngAfterViewChecked: Cmp17');
  }
}
