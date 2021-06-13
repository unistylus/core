import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeComponentModule } from '../../../components/code/code.module';

import { ResetRoutingModule } from './reset-routing.module';
import { ResetComponent } from './reset.component';


@NgModule({
  declarations: [
    ResetComponent
  ],
  imports: [
    CommonModule,
    CodeComponentModule,
    ResetRoutingModule
  ]
})
export class ResetPageModule { }
