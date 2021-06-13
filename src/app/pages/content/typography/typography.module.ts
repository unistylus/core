import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypographyRoutingModule } from './typography-routing.module';
import { TypographyComponent } from './typography.component';

import { CodeComponentModule } from '../../../components/code/code.module';

@NgModule({
  declarations: [TypographyComponent],
  imports: [
    CommonModule,
    CodeComponentModule,
    TypographyRoutingModule
  ]
})
export class TypographyPageModule {}
