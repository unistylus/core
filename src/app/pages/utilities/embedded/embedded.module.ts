import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeComponentModule } from '../../../components/code/code.module';

import { EmbeddedRoutingModule } from './embedded-routing.module';
import { EmbeddedComponent } from './embedded.component';


@NgModule({
  declarations: [
    EmbeddedComponent
  ],
  imports: [
    CommonModule,
    CodeComponentModule,
    EmbeddedRoutingModule
  ]
})
export class EmbeddedPageModule { }
