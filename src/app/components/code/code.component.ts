import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';

import { CodeService } from '../../services/code/code.service';

declare const hljs: any;

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit, AfterViewInit {
  @ViewChild('codeComponent')
  private codeComponent?: ElementRef<HTMLElement>;

  @Input('title') title = '';
  @Input('showLang') showLang?: string;

  @Input('htmlSource') htmlSource?: HTMLElement;
  @Input('htmlCode') htmlCode?: string;
  @Input('htmlLabel') htmlLabel = 'HTML';

  @Input('cssCode') cssCode?: string;
  @Input('cssLabel') cssLabel = 'CSS';

  @Input('jsCode') jsCode?: string;
  @Input('jsLabel') jsLabel = 'JS';

  constructor(public codeService: CodeService) { }

  ngOnInit(): void {
    if (!this.showLang) {
      this.showLang = 
        this.htmlSource || this.htmlCode
          ? 'html'
          : this.cssCode
          ? 'css'
          : this.jsCode
          ? 'js'
          : undefined;
    }
  }

  ngAfterViewInit() {
    if (this.codeComponent) {
      this.codeComponent.nativeElement
        .querySelectorAll('pre code')
        .forEach(block => hljs.highlightBlock(block));
    }
  }

  isMultiple() {
    return (
        (this.htmlSource || this.htmlCode)
        && (this.cssCode || this.jsCode)
      )
        || (this.cssCode && this.jsCode);
  }

}
