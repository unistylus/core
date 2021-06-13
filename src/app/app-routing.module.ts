import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';

import {HomeComponent} from './pages/home/home.component';
import {OopsComponent} from './pages/oops/oops.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  // Getting started
  { path: 'getting-started/introduction', loadChildren: () => import('./pages/getting-started/introduction/introduction.module').then(m => m.IntroductionPageModule) },
  { path: 'getting-started/install', loadChildren: () => import('./pages/getting-started/install/install.module').then(m => m.InstallPageModule) },
  { path: 'getting-started/usage', loadChildren: () => import('./pages/getting-started/usage/usage.module').then(m => m.UsagePageModule) },
  { path: 'getting-started/contribute', loadChildren: () => import('./pages/getting-started/contribute/contribute.module').then(m => m.ContributePageModule) },
  // Skins
  { path: 'skin/builtin-skins', loadChildren: () => import('./pages/skins/builtin-skins/builtin-skins.module').then(m => m.BuiltinSkinsPageModule) },
  { path: 'skin/customize-skin', loadChildren: () => import('./pages/skins/customize-skin/customize-skin.module').then(m => m.CustomizeSkinPageModule) },
  { path: 'skin/add-skin', loadChildren: () => import('./pages/skins/add-skin/add-skin.module').then(m => m.AddSkinPageModule) },
  // Souls
  { path: 'soul/builtin-souls', loadChildren: () => import('./pages/souls/builtin-souls/builtin-souls.module').then(m => m.BuiltinSoulsPageModule) },
  { path: 'soul/customize-soul', loadChildren: () => import('./pages/souls/customize-soul/customize-soul.module').then(m => m.CustomizeSoulPageModule) },
  { path: 'soul/add-soul', loadChildren: () => import('./pages/souls/add-soul/add-soul.module').then(m => m.AddSoulPageModule) },
  // { path: 'soul/reset', loadChildren: () => import('./pages/souls/reset/reset.module').then(m => m.ResetPageModule) },
  // { path: 'soul/core', loadChildren: () => import('./pages/souls/core/core.module').then(m => m.CorePageModule) },
  // { path: 'soul/full', loadChildren: () => import('./pages/souls/full/full.module').then(m => m.FullPageModule) },
  { path: 'soul/:articleId', loadChildren: () => import('./pages/souls/soul/soul.module').then(m => m.SoulPageModule) },
  // // Content
  // { path: 'content/typography', loadChildren: () => import('./pages/content/typography/typography.module').then(m => m.TypographyPageModule) },
  // { path: 'content/images', loadChildren: () => import('./pages/content/images/images.module').then(m => m.ImagesPageModule) },
  // { path: 'content/tables', loadChildren: () => import('./pages/content/tables/tables.module').then(m => m.TablesPageModule) },
  // // Forms
  // { path: 'forms/form-controls', loadChildren: () => import('./pages/forms/form-control/form-control.module').then(m => m.FormControlPageModule) },
  // // Components
  // { path: 'components/alerts', loadChildren: () => import('./pages/components/alerts/alerts.module').then(m => m.AlertsPageModule) },
  // { path: 'components/badges', loadChildren: () => import('./pages/components/badges/badges.module').then(m => m.BadgesPageModule) },
  // { path: 'components/buttons', loadChildren: () => import('./pages/components/buttons/buttons.module').then(m => m.ButtonsPageModule) },
  // { path: 'components/icons', loadChildren: () => import('./pages/components/icons/icons.module').then(m => m.IconsPageModule) },
  // // Utilities
  // { path: 'utilities/spacing', loadChildren: () => import('./pages/utilities/spacing/spacing.module').then(m => m.SpacingPageModule) },
  // { path: 'utilities/background', loadChildren: () => import('./pages/utilities/background/background.module').then(m => m.BackgroundPageModule) },
  // { path: 'utilities/colors', loadChildren: () => import('./pages/utilities/colors/colors.module').then(m => m.ColorsPageModule) },
  // { path: 'utilities/borders', loadChildren: () => import('./pages/utilities/borders/borders.module').then(m => m.BordersPageModule) },
  // { path: 'utilities/transitions', loadChildren: () => import('./pages/utilities/transitions/transitions.module').then(m => m.TransitionsPageModule) },
  // { path: 'utilities/embedded', loadChildren: () => import('./pages/utilities/embedded/embedded.module').then(m => m.EmbeddedPageModule) },
  // { path: 'utilities/truncate', loadChildren: () => import('./pages/utilities/truncate/truncate.module').then(m => m.TruncatePageModule) },
  {path: '**', component: OopsComponent},
];

@NgModule({
  imports: [
    QuicklinkModule,
    RouterModule.forRoot(routes, { preloadingStrategy: QuicklinkStrategy })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
