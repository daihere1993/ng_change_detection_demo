import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ComponentFifteen} from './component-fifteen.component';

describe('Component: ComponentFifteen', () => {

    let fixture: ComponentFixture<ComponentFifteen>;
    let component: ComponentFifteen;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ComponentFifteen]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ComponentFifteen);
        component = fixture.componentInstance;
    });

    it('should create an instance', () => {
        expect(component).toBeTruthy();
    });

});
