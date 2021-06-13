import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoulComponent } from './soul.component';

const routes: Routes = [{ path: '', component: SoulComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoulRoutingModule { }
