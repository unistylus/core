import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customize-skin',
  templateUrl: './customize-skin.component.html',
  styleUrls: ['./customize-skin.component.scss']
})
export class CustomizeSkinComponent implements OnInit {

  cssCode = `// customize skin name 'foo'
[data-theme=foo] {
  --app-color-primary: ...;
}
`;

  constructor() { }

  ngOnInit(): void {
  }

}
