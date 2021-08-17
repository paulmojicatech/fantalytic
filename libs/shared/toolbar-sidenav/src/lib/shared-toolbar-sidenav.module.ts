import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PmtToolbarSidenavComponent } from './index.component';
import { MatDrawerState } from './models/sidenav.interface';

@NgModule({
  imports: [CommonModule, BrowserAnimationsModule,MatSidenavModule,MatToolbarModule,MatButtonModule,MatIconModule],
  declarations: [PmtToolbarSidenavComponent],
  exports: [PmtToolbarSidenavComponent]
})
export class SharedToolbarSidenavModule {}
