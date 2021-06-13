import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddSoulRoutingModule } from './add-soul-routing.module';
import { AddSoulComponent } from './add-soul.component';


@NgModule({
  declarations: [
    AddSoulComponent
  ],
  imports: [
    CommonModule,
    AddSoulRoutingModule
  ]
})
export class AddSoulPageModule { }
