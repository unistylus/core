import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuiltinSkinsComponent } from './builtin-skins.component';

const routes: Routes = [{ path: '', component: BuiltinSkinsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuiltinSkinsRoutingModule { }
