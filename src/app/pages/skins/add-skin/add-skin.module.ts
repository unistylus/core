import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeComponentModule } from '../../../components/code/code.module';

import { AddSkinRoutingModule } from './add-skin-routing.module';
import { AddSkinComponent } from './add-skin.component';


@NgModule({
  declarations: [
    AddSkinComponent
  ],
  imports: [
    CommonModule,
    CodeComponentModule,
    AddSkinRoutingModule
  ]
})
export class AddSkinPageModule { }
