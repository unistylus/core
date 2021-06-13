import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLinkDirectiveModule} from '@lamnhan/ngx-useful';

import { CodeComponentModule } from '../../../components/code/code.module';

import { BuiltinSkinsRoutingModule } from './builtin-skins-routing.module';
import { BuiltinSkinsComponent } from './builtin-skins.component';


@NgModule({
  declarations: [
    BuiltinSkinsComponent
  ],
  imports: [
    CommonModule,
    CodeComponentModule,
    RouterLinkDirectiveModule,
    BuiltinSkinsRoutingModule
  ]
})
export class BuiltinSkinsPageModule { }
