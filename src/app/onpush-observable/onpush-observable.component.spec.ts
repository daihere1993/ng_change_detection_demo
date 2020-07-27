import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnpushObservableComponent } from './onpush-observable.component';

describe('OnpushObservableComponent', () => {
  let component: OnpushObservableComponent;
  let fixture: ComponentFixture<OnpushObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnpushObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnpushObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
