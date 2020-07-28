import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OnpushObservableModule } from './onpush-observable/onpush-observable.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OnpushObservableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
