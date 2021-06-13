import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeService } from '../../services/code/code.service';

import { CodeComponent } from './code.component';

@NgModule({
  declarations: [CodeComponent],
  imports: [
    CommonModule,
  ],
  providers: [
    CodeService,
  ],
  exports: [
    CodeComponent,
  ]
})
export class CodeComponentModule {}
