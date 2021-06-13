import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransitionsRoutingModule } from './transitions-routing.module';
import { TransitionsComponent } from './transitions.component';

import { CodeComponentModule } from '../../../components/code/code.module';

@NgModule({
  declarations: [TransitionsComponent],
  imports: [
    CommonModule,
    CodeComponentModule,
    TransitionsRoutingModule
  ]
})
export class TransitionsPageModule {}
