import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor() { }

  model: Subject<any> = new Subject();

  push() {
    this.model.next(null);
  }
}
