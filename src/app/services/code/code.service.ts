import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CodeService {

  constructor() { }

  extractCode(el: HTMLElement) {
    return el
      .innerHTML
      .replace(/( _ng).*?("")/g, '')
      .replace(/<br>|<br \/>/g, '\n')
      .replace(/<hr>|<hr \/>/g, '  ');
  }
}
