/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { SharedToolbarSidenavModule } from '../../../../libs/shared/toolbar-sidenav/src/index';

import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MatSnackBarModule } from '@angular/material/snack-bar';


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
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
