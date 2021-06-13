import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesRoutingModule } from './images-routing.module';
import { ImagesComponent } from './images.component';

import { CodeComponentModule } from '../../../components/code/code.module';

@NgModule({
  declarations: [ImagesComponent],
  imports: [
    CommonModule,
    CodeComponentModule,
    ImagesRoutingModule
  ]
})
export class ImagesPageModule {}
