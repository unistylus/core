import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BadgesRoutingModule } from './badges-routing.module';
import { BadgesComponent } from './badges.component';

import { CodeComponentModule } from '../../../components/code/code.module';

@NgModule({
  declarations: [BadgesComponent],
  imports: [
    CommonModule,
    CodeComponentModule,
    BadgesRoutingModule
  ]
})
export class BadgesPageModule {}
