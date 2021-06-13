import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpacingRoutingModule } from './spacing-routing.module';
import { SpacingComponent } from './spacing.component';

import { CodeComponentModule } from '../../../components/code/code.module';

@NgModule({
  declarations: [SpacingComponent],
  imports: [
    CommonModule,
    CodeComponentModule,
    SpacingRoutingModule
  ]
})
export class SpacingPageModule {}
