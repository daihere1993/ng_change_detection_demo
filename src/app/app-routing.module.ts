import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnpushObservableComponent } from './onpush-observable/onpush-observable.component';

const routes: Routes = [
  { path: '', redirectTo: 'onpush-observable', pathMatch: 'full' },
  { path: 'onpush-observable', component: OnpushObservableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
