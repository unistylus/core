import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuiltinSoulsRoutingModule } from './builtin-souls-routing.module';
import { BuiltinSoulsComponent } from './builtin-souls.component';


@NgModule({
  declarations: [
    BuiltinSoulsComponent
  ],
  imports: [
    CommonModule,
    BuiltinSoulsRoutingModule
  ]
})
export class BuiltinSoulsPageModule { }
