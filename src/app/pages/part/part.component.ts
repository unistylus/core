import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap, take, catchError } from 'rxjs/operators';
import { FetchService } from '@lamnhan/ngx-useful';

import { SoulService } from '../../services/soul/soul.service';

@Component({
  selector: 'app-part',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.scss']
})
export class PartComponent implements OnInit {
  
  activeChild = '';
  search = '';

  defaultHtmlCode?: string;
  childHtmlCode?: string;

  public readonly soulArticle$ = this.route.params.pipe(
    map(params => this.soulService.getSoulArticle(params.id)),
    tap(article => {
      // reset child
      this.activeChild = '';
      // fetch html code for default
      if (article) {
        this.loadHtmlCode(article.name as string, article.name?.split('/').pop() as string)
          .subscribe(htmlCode => this.defaultHtmlCode = htmlCode);
      }
    }),
  );

  constructor(
    private route: ActivatedRoute,
    public readonly fetchService: FetchService,
    public readonly soulService: SoulService,
  ) {}

  ngOnInit(): void {}

  selectChild(articleName: string, childName: string) {
    this.activeChild = childName;
    this.loadHtmlCode(articleName, childName)
      .subscribe(htmlCode => this.childHtmlCode = htmlCode);
  }

  getCSSImport(articleName: string, childName?: string) {
    articleName = !childName ? articleName : articleName.split('/').shift() + '/' + childName;
    return `
\`\`\`scss
@import '@unistylus/${this.soulService.soul}/${articleName}';
\`\`\`
    `;
  }

  getSCSSImport(articleName: string, childName?: string) {
    articleName = !childName ? articleName : articleName.split('/').shift() + '/' + childName;
    return `
\`\`\`html
<link rel="stylesheet" href="https://unpkg.com/@unistylus/${this.soulService.soul}-css@latest/${articleName}.min.css">
\`\`\`
    `;
  }

  loadHtmlCode(articleName: string, className: string) {
    return  this.fetchService.get(`/content/previews/${articleName}.html`, undefined, false).pipe(
      take(1),
      map(rawHtml => (rawHtml as string).replace(/\[class\]/g, className)),
      catchError(() => 'Preview not found!'),
    );
  }

  displayHtmlCode(htmlCode: string) {
    return `
\`\`\`html
${htmlCode}
\`\`\`
    `;
  }

}
