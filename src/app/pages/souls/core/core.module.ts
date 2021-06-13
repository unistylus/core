import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeComponentModule } from '../../../components/code/code.module';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';


@NgModule({
  declarations: [
    CoreComponent
  ],
  imports: [
    CommonModule,
    CodeComponentModule,
    CoreRoutingModule
  ]
})
export class CorePageModule { }
