import { Component, OnInit } from '@angular/core';
import { ModelService } from './model.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-onpush-observable',
  templateUrl: './onpush-observable.component.html',
  styleUrls: ['./onpush-observable.component.scss']
})
export class OnpushObservableComponent implements OnInit {
  model: Subject<any> = new Subject();

  constructor(private modelService: ModelService) { }

  ngOnInit(): void {
  }

  pushToCmp17() {
    this.model.next(null);
  }

}
