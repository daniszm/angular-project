import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { A2sCommModule } from 'a2s-comm';
import { HangarComponent } from './hangar/hangar.component';
import { SpaceShipComponent } from './space-ship/space-ship.component'

@NgModule({
  declarations: [
    AppComponent,
    HangarComponent,
    SpaceShipComponent
  ],
  imports: [
    BrowserModule, A2sCommModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }