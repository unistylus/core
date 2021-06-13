import { Component, OnInit } from '@angular/core';

import { CodeService } from '../../../services/code/code.service';
@Component({
  selector: 'app-typography-page',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss']
})
export class TypographyComponent implements OnInit {

  constructor(public codeService: CodeService) { }

  ngOnInit(): void {
  }

}
