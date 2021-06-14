import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';

const routes: Routes = [
  {path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule), pathMatch: 'full'},
  { path: 'guide/:id', loadChildren: () => import('./pages/guide/guide.module').then(m => m.GuidePageModule) },
  { path: 'part/:id', loadChildren: () => import('./pages/part/part.module').then(m => m.PartPageModule) },
  {path: '**', loadChildren: () => import('@lamnhan/nguix-starter').then(m => m.NguixOopsPageModule) },
];

@NgModule({
  imports: [
    QuicklinkModule,
    RouterModule.forRoot(routes, { preloadingStrategy: QuicklinkStrategy })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
