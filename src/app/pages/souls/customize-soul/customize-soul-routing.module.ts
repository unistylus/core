import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomizeSoulComponent } from './customize-soul.component';

const routes: Routes = [{ path: '', component: CustomizeSoulComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomizeSoulRoutingModule { }
