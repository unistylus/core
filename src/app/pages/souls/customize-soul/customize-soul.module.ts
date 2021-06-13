import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeComponentModule } from '../../../components/code/code.module';

import { CustomizeSoulRoutingModule } from './customize-soul-routing.module';
import { CustomizeSoulComponent } from './customize-soul.component';


@NgModule({
  declarations: [
    CustomizeSoulComponent
  ],
  imports: [
    CommonModule,
    CodeComponentModule,
    CustomizeSoulRoutingModule
  ]
})
export class CustomizeSoulPageModule { }
