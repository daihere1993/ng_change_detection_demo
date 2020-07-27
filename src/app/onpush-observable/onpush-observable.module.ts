import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentOne } from './component-one/component-one.component';
import { ComponentTwo } from './component-two/component-two.component';
import { ComponentThree } from './component-three/component-three.component';
import { ComponentFour } from './component-four/component-four.component';
import { ComponentFive } from './component-five/component-five.component';
import { ComponentSix } from './component-six/component-six.component';
import { ComponentSeven } from './component-seven/component-seven.component';
import { ComponentEight } from './component-eight/component-eight.component';
import { ComponentNine } from './component-nine/component-nine.component';
import { ComponentTen } from './component-ten/component-ten.component';
import { ComponentEleven } from './component-eleven/component-eleven.component';
import { ComponentTwelve } from './component-twelve/component-twelve.component';
import { ComponentThirteen } from './component-thirteen/component-thirteen.component';
import { ComponentFourteen } from './component-fourteen/component-fourteen.component';
import { ComponentFifteen } from './component-fifteen/component-fifteencomponent';
import { ComponentSixteen } from './component-sixteen/component-sixteen.component';
import { ComponentSeventeen } from './component-seventeen/component-seventeen.component';
import { NzButtonModule } from 'ng-zorro-antd';
import { OnpushObservableComponent } from './onpush-observable.component';

@NgModule({
  declarations: [
    ComponentOne,
    ComponentTwo,
    ComponentThree,
    ComponentFour,
    ComponentFive,
    ComponentSix,
    ComponentSeven,
    ComponentEight,
    ComponentNine,
    ComponentTen,
    ComponentEleven,
    ComponentTwelve,
    ComponentThirteen,
    ComponentFourteen,
    ComponentFifteen,
    ComponentSixteen,
    ComponentSeventeen,
    OnpushObservableComponent,
  ],
  imports: [CommonModule, NzButtonModule],
})
export class OnpushObservableModule {}
