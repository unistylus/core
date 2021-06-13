import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconsRoutingModule } from './icons-routing.module';
import { IconsComponent } from './icons.component';

import { CodeComponentModule } from '../../../components/code/code.module';

@NgModule({
  declarations: [IconsComponent],
  imports: [
    CommonModule,
    IconsRoutingModule,
    CodeComponentModule
  ]
})
export class IconsPageModule {}
