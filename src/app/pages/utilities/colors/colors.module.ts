import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColorsRoutingModule } from './colors-routing.module';
import { ColorsComponent } from './colors.component';

import { CodeComponentModule } from '../../../components/code/code.module';

@NgModule({
  declarations: [ColorsComponent],
  imports: [
    CommonModule,
    CodeComponentModule,
    ColorsRoutingModule
  ]
})
export class ColorsPageModule {}
