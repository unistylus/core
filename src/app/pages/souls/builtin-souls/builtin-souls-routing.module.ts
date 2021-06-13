import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuiltinSoulsComponent } from './builtin-souls.component';

const routes: Routes = [{ path: '', component: BuiltinSoulsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuiltinSoulsRoutingModule { }
