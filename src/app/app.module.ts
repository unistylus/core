import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  LocalstorageService,
  CacheService,
  FetchService,
  AppService,
  MetaService,
  NavService,
  SettingService,
  RouterLinkDirectiveModule,
} from '@lamnhan/ngx-useful';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';

import { SoulService } from './services/soul/soul.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLinkDirectiveModule,
  ],
  providers: [
    LocalstorageService,
    CacheService,
    FetchService,
    AppService,
    MetaService,
    NavService,
    SettingService,
    SoulService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
