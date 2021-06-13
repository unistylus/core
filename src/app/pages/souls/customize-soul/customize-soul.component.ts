import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customize-soul',
  templateUrl: './customize-soul.component.html',
  styleUrls: ['./customize-soul.component.scss']
})
export class CustomizeSoulComponent implements OnInit {
  
  cssCode = `// override CSS
.button {
  // any
}
`;
  constructor() { }

  ngOnInit(): void {
  }

}
