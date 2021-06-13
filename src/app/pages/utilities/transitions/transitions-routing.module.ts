import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransitionsComponent } from './transitions.component';

const routes: Routes = [{ path: '', component: TransitionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransitionsRoutingModule {}
