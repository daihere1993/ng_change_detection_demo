import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { OnpushComponent } from './onpush/onpush.component';
import { OnpushObservableComponent } from './onpush-observable/onpush-observable.component';

const routes: Routes = [
  { path: '', redirectTo: 'basic', pathMatch: 'full' },
  { path: 'basic', component: BasicComponent },
  { path: 'onpush', component: OnpushComponent },
  { path: 'onpushObservable', component: OnpushObservableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
