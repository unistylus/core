import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usage-page',
  templateUrl: './usage.component.html',
  styleUrls: ['./usage.component.scss']
})
export class UsageComponent implements OnInit {

  scssCode = `// I. Choose a skin (or multiple skins)

//     1. Must has a default one (surfixed 'default')
@import '@lamnhan/unistylus/scss/skins/light-default';

//     2. And, other skins if you want
@import '@lamnhan/unistylus/scss/skins/dark';

// II. Choose a soul

//     1. (NOT RECOMMENDED) Include all parts (and variations)
@import '@lamnhan/unistylus-bootstrap/full';

//     2. (RECOMMENDED) Just the part you needed ('core.scss' is required)
@import '@lamnhan/unistylus-bootstrap/reset';
@import '@lamnhan/unistylus-bootstrap/core';
@import '@lamnhan/unistylus-bootstrap/content/typography';
@import '@lamnhan/unistylus-bootstrap/components/button';
`;

  cssCode = `<!-- I. Choose a skin (or multiple skins) -->

<!--     1. Must has a default one (surfixed 'default') -->
<link rel="stylesheet" href="https://unpkg.com/@lamnhan/unistylus@latest/css/skins/light-default.min.css">

<!--     2. And, other skins if you want -->
<link rel="stylesheet" href="https://unpkg.com/@lamnhan/unistylus@latest/css/skins/dark.min.css">

<!-- II. Choose a soul -->

<!--     1. (NOT RECOMMENDED) Include all parts (and variations) -->
<link rel="stylesheet" href="https://unpkg.com/@lamnhan/unistylus-bootstrap-css@latest/full.min.css">

<!--     2. (RECOMMENDED) Just the part you needed ('core.css/core.min.css' is required)  -->
<link rel="stylesheet" href="https://unpkg.com/@lamnhan/unistylus-bootstrap-css@latest/reset.min.css">
<link rel="stylesheet" href="https://unpkg.com/@lamnhan/unistylus-bootstrap-css@latest/core.min.css">
<link rel="stylesheet" href="https://unpkg.com/@lamnhan/unistylus-bootstrap-css@latest/content/typography.min.css">
<link rel="stylesheet" href="https://unpkg.com/@lamnhan/unistylus-bootstrap-css@latest/components/button.min.css">
`;

  constructor() { }

  ngOnInit(): void {
  }

}
