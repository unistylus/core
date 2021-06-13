import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeComponentModule } from '../../../components/code/code.module';

import { TruncateRoutingModule } from './truncate-routing.module';
import { TruncateComponent } from './truncate.component';


@NgModule({
  declarations: [
    TruncateComponent
  ],
  imports: [
    CommonModule,
    CodeComponentModule,
    TruncateRoutingModule
  ]
})
export class TruncatePageModule { }
