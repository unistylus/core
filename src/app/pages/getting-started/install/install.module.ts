import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkDirectiveModule } from '@lamnhan/ngx-useful';

import { CodeComponentModule } from '../../../components/code/code.module';

import { InstallRoutingModule } from './install-routing.module';
import { InstallComponent } from './install.component';

@NgModule({
  declarations: [InstallComponent],
  imports: [
    CommonModule,
    RouterLinkDirectiveModule,
    CodeComponentModule,
    InstallRoutingModule,
  ]
})
export class InstallPageModule {}
