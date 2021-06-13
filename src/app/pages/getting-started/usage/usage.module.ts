import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkDirectiveModule } from '@lamnhan/ngx-useful';

import { CodeComponentModule } from '../../../components/code/code.module';

import { UsageRoutingModule } from './usage-routing.module';
import { UsageComponent } from './usage.component';


@NgModule({
  declarations: [UsageComponent],
  imports: [
    CommonModule,
    RouterLinkDirectiveModule,
    CodeComponentModule,
    UsageRoutingModule
  ]
})
export class UsagePageModule {}
