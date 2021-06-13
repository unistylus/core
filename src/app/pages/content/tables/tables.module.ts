import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';

import { CodeComponentModule } from '../../../components/code/code.module';

@NgModule({
  declarations: [TablesComponent],
  imports: [
    CommonModule,
    CodeComponentModule,
    TablesRoutingModule
  ]
})
export class TablesPageModule {}
