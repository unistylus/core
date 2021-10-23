import { Component } from '@angular/core';
import {
  NavItem,
  LocalstorageService,
  CacheService,
  FetchService,
  AppService,
  MetaService,
  NavService,
  SettingService
} from '@lamnhan/ngx-useful';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  menuItems: NavItem[] = [
    // {
    //   text: 'Guides',
    //   level: 0,
    // },
      {
        text: 'Introduction',
        level: 1,
        routerLink: ['guide', 'introduction']
      },
      {
        text: 'Basic usage',
        level: 1,
        routerLink: ['guide', 'usage']
      },
      {
        text: 'Skin, soul & collection?',
        level: 1,
        routerLink: ['guide', 'terminology']
      },
      {
        text: 'Contribution',
        level: 1,
        routerLink: ['guide', 'contribution']
      },
  ];

  constructor(
    private localstorageService: LocalstorageService,
    private cacheService: CacheService,
    private fetchService: FetchService,
    private appService: AppService,
    private metaService: MetaService,
    private navService: NavService,
    private settingService: SettingService,
  ) {
    this.initialize();
  }

  private initialize() {
    this.localstorageService.init();
    this.cacheService.init();
    this.fetchService.init(
      { cacheTime: 60 },
      { cacheService: this.cacheService }
    );
    this.appService.init({ splashScreen: true });
    this.settingService.init(
      {
        browserColor: true,
        onReady: () => this.appService.hideSplashScreen(),
      },
      {},
      {
        localstorageService: this.localstorageService,
      },
    );
    this.navService.init(
      {},
      { settingService: this.settingService },
    );
    this.metaService.init(
      {
        title: 'Unistylus',
        description: 'A modern, clean and light weight CSS theming system.',
        image: 'https://unistylus.lamnhan.com/assets/images/featured.jpg',
        url: 'https://unistylus.lamnhan.com/',
        lang: 'en',
        ogLocale: 'en-US',
        ogSiteName: 'Unistylus'
      },
      {},
      { settingService: this.settingService },
    );
  }
}
