import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-onpush-observable',
  templateUrl: './onpush-observable.component.html',
  styleUrls: ['./onpush-observable.component.scss']
})
export class OnpushObservableComponent implements OnInit {

  model: Subject<any> = new Subject();
  
  constructor() { }

  ngOnInit(): void {
  }

  emitAndTriggerChangeDetection() {
    this.model.next(null);
  }

}
