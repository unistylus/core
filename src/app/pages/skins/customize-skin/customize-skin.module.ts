import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeComponentModule } from '../../../components/code/code.module';

import { CustomizeSkinRoutingModule } from './customize-skin-routing.module';
import { CustomizeSkinComponent } from './customize-skin.component';


@NgModule({
  declarations: [
    CustomizeSkinComponent
  ],
  imports: [
    CommonModule,
    CodeComponentModule,
    CustomizeSkinRoutingModule
  ]
})
export class CustomizeSkinPageModule { }
