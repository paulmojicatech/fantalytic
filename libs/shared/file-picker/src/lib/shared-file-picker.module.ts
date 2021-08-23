import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { PmtFilePickerComponent } from './index.component';

@NgModule({
  imports: [CommonModule, MatIconModule, MatButtonModule],
  declarations: [PmtFilePickerComponent],
  exports: [PmtFilePickerComponent]
})
export class SharedFilePickerModule {}
