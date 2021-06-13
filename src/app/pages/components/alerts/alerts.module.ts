import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertsRoutingModule } from './alerts-routing.module';
import { AlertsComponent } from './alerts.component';

import { CodeComponentModule } from '../../../components/code/code.module';

@NgModule({
  declarations: [AlertsComponent],
  imports: [
    CommonModule,
    CodeComponentModule,
    AlertsRoutingModule
  ]
})
export class AlertsPageModule {}
