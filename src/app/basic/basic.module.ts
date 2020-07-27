import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './basic.component';
import { ComponentOne } from './component-one/component-one.component';
import { ComponentTwo } from './component-two/component-two.component';
import { ComponentThree } from './component-three/component-three.component';
import { ComponentFour } from './component-four/component-four.component';
import { ComponentFive } from './component-five/component-five.component';
import { ComponentSix } from './component-six/component-six.component';
import { ComponentSeven } from './component-seven/component-seven.component';
import { NzButtonModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [
    BasicComponent,
    ComponentOne,
    ComponentTwo,
    ComponentThree,
    ComponentFour,
    ComponentFive,
    ComponentSix,
    ComponentSeven,
  ],
  imports: [CommonModule, NzButtonModule],
})
export class BasicModule {}
