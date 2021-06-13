import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeComponentModule } from '../../../components/code/code.module';

import { FullRoutingModule } from './full-routing.module';
import { FullComponent } from './full.component';


@NgModule({
  declarations: [
    FullComponent
  ],
  imports: [
    CommonModule,
    CodeComponentModule,
    FullRoutingModule
  ]
})
export class FullPageModule { }
