import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackgroundRoutingModule } from './background-routing.module';
import { BackgroundComponent } from './background.component';

import { CodeComponentModule } from '../../../components/code/code.module';

@NgModule({
  declarations: [BackgroundComponent],
  imports: [
    CommonModule,
    CodeComponentModule,
    BackgroundRoutingModule
  ]
})
export class BackgroundPageModule {}
