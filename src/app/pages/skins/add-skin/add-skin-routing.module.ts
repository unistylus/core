import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSkinComponent } from './add-skin.component';

const routes: Routes = [{ path: '', component: AddSkinComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddSkinRoutingModule { }
