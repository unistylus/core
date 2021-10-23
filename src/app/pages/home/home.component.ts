import { Component, OnInit } from '@angular/core';
import { SettingService } from '@lamnhan/ngx-useful';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  installationContent = `
Install the CLI, it helps you to change between souls, add and remove skins or parts:

\`\`\`bash
npm i -D @unistylus/cli
\`\`\`
`;

  constructor(
    public readonly settingService: SettingService
  ) { }

  ngOnInit(): void {
  }

}
