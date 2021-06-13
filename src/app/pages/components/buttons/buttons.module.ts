import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonsRoutingModule } from './buttons-routing.module';
import { ButtonsComponent } from './buttons.component';

import { CodeComponentModule } from '../../../components/code/code.module';

@NgModule({
  declarations: [ButtonsComponent],
  imports: [
    CommonModule,
    CodeComponentModule,
    ButtonsRoutingModule
  ]
})
export class ButtonsPageModule {}
