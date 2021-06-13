import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSoulComponent } from './add-soul.component';

const routes: Routes = [{ path: '', component: AddSoulComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddSoulRoutingModule { }
