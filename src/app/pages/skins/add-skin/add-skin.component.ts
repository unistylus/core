import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-skin',
  templateUrl: './add-skin.component.html',
  styleUrls: ['./add-skin.component.scss']
})
export class AddSkinComponent implements OnInit {

  cssCode = `// new skin name 'foo'
[data-theme=foo] {
  --app-color-primary: ...;
}
`;

  constructor() { }

  ngOnInit(): void {
  }

}
