import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BordersRoutingModule } from './borders-routing.module';
import { BordersComponent } from './borders.component';

import { CodeComponentModule } from '../../../components/code/code.module';

@NgModule({
  declarations: [BordersComponent],
  imports: [
    CommonModule,
    CodeComponentModule,
    BordersRoutingModule
  ]
})
export class BordersPageModule {}
