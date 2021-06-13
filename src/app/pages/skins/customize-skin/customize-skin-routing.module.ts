import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomizeSkinComponent } from './customize-skin.component';

const routes: Routes = [{ path: '', component: CustomizeSkinComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomizeSkinRoutingModule { }
