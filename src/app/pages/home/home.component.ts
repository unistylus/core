import { Component, OnInit } from '@angular/core';
import { SettingService } from '@lamnhan/ngx-useful';

import { SoulService } from '../../services/soul/soul.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  scssSkin = `
Install skins & mixins:
\`\`\`scss
npm install --save @unistylus/core
\`\`\`
`;

  scssSoul = `
Install a soul ([list of souls](/guide/soul)):
\`\`\`scss
npm install --save @unistylus/bootstrap
\`\`\`
`;

  cssSkin = `
Import skins from a CDN:
\`\`\`html
<link rel="stylesheet" href="https://unpkg.com/@unistylus/core@latest/css/skins/light-default.min.css">
\`\`\`
`;

  cssSoul = `
Import a soul from a CDN ([list of souls](/guide/soul)):
\`\`\`html
<link rel="stylesheet" href="https://unpkg.com/@unistylus/bootstrap-css@latest/full.min.css">
\`\`\`
`;

  constructor(
    public readonly settingService: SettingService,
    public readonly soulService: SoulService,
  ) { }

  ngOnInit(): void {
  }

  changeSkin(name: string) {
    this.settingService.changeTheme(name); 
  }

  changeSoul(name: string) {
    this.soulService.changeSoul(name);
  }

}
