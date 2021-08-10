import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PmtToolbarSidenavComponent } from './index.component';

@NgModule({
  imports: [CommonModule,MatSidenavModule,MatToolbarModule,MatButtonModule,MatIconModule],
  declarations: [PmtToolbarSidenavComponent],
  exports: [PmtToolbarSidenavComponent]
})
export class SharedToolbarSidenavModule {}
