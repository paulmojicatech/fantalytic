/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { SharedToolbarSidenavModule } from '../../../../libs/shared/toolbar-sidenav/src/index';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { reducer as appReducer } from './state/app-state.reducer';

const routes: Route[] = [
  {
    path: 'analyze-file',
    loadChildren: () =>
      import('./analyze-file/analyze-file.module').then(
        (m) => m.AnalyzeFileModule
      ),
  },
  {
    path: '',
    redirectTo: 'analyze-file',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SharedToolbarSidenavModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([]),
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
