import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormControlRoutingModule } from './form-control-routing.module';
import { FormControlComponent } from './form-control.component';

import { CodeComponentModule } from '../../../components/code/code.module';

@NgModule({
  declarations: [FormControlComponent],
  imports: [
    CommonModule,
    CodeComponentModule,
    FormControlRoutingModule
  ]
})
export class FormControlPageModule {}
