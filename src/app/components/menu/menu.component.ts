import { Component, OnInit, Input } from '@angular/core';
import { NavService, NavItem, SettingService } from '@lamnhan/ngx-useful';

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
  ) {}

  ngOnInit(): void {}
}
