import { Component, OnInit } from '@angular/core';
import { SettingService } from '@lamnhan/ngx-useful';

import { SoulService } from '../../services/soul/soul.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  installationContent = `
Install the CLI:

\`\`\`bash
npm i -D @unistylus/cli
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
