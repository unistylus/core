import { Component, OnInit, Input } from '@angular/core';
import { NavService, NavItem, SettingService } from '@lamnhan/ngx-useful';

import { SoulService } from '../../services/soul/soul.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input('menuItems') menuItems?: NavItem[];

  mobileMenuExpanded = false;

  constructor(
    public readonly navService: NavService,
    public readonly settingService: SettingService,
    public readonly soulService: SoulService,
  ) {}

  ngOnInit(): void {
    if (!this.soulService.soul) {
      this.soulService.changeSoul('bootstrap');
    }
  }

  selectTheme(e: any) {
    return this.settingService.changeTheme(e.target.value);
  }
  
  selectSoul(e: any) {
    return this.soulService.changeSoul(e.target.value);
  }
}
