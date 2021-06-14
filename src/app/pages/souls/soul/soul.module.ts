import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SafePipeModule } from '@lamnhan/ngx-useful';
import { NguixContentComponentModule } from '@lamnhan/nguix-starter';

import { FilterPipeModule } from '../../../pipes/filter/filter.module';

import { SoulRoutingModule } from './soul-routing.module';
import { SoulComponent } from './soul.component';


@NgModule({
  declarations: [
    SoulComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SafePipeModule,
    NguixContentComponentModule,
    FilterPipeModule,
    SoulRoutingModule
  ]
})
export class SoulPageModule { }
