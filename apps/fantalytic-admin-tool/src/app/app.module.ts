/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedToolbarSidenavModule } from '../../../../libs/shared/toolbar-sidenav/src/index';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedToolbarSidenavModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
