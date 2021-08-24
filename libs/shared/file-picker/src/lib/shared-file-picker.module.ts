import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { PmtFilePickerComponent } from './index.component';
import { PmtFileDropDirective } from './directives/file-drop.directive';

@NgModule({
  imports: [CommonModule, MatIconModule, MatButtonModule],
  declarations: [PmtFilePickerComponent, PmtFileDropDirective],
  exports: [PmtFilePickerComponent]
})
export class SharedFilePickerModule {}
