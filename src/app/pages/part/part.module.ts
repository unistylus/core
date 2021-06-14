import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SafePipeModule } from '@lamnhan/ngx-useful';
import { NguixContentComponentModule } from '@lamnhan/nguix-starter';

import { FilterPipeModule } from '../../pipes/filter/filter.module';

import { PartRoutingModule } from './part-routing.module';
import { PartComponent } from './part.component';


@NgModule({
  declarations: [
    PartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SafePipeModule,
    NguixContentComponentModule,
    FilterPipeModule,
    PartRoutingModule
  ]
})
export class PartPageModule { }
