import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipeModule } from '@lamnhan/ngx-useful';
import { NguixContentComponentModule } from '@lamnhan/nguix-starter';

import { SoulRoutingModule } from './soul-routing.module';
import { SoulComponent } from './soul.component';


@NgModule({
  declarations: [
    SoulComponent
  ],
  imports: [
    CommonModule,
    SafePipeModule,
    NguixContentComponentModule,
    SoulRoutingModule
  ]
})
export class SoulPageModule { }
