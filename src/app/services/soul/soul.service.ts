import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { pascalCase } from 'change-case';
import { NavItem, FetchService } from '@lamnhan/ngx-useful';

export interface SoulArticle extends NavItem {
  name: string;
  text: string;
  children: string[];
}

@Injectable({
  providedIn: 'root'
})
export class SoulService {
  soul = '';
  soulArticles: SoulArticle[] = [];

  constructor(private fetchService: FetchService) {}

  getSoulArticle(articleId: string) {
    const name = articleId.replace(/-/g, '/');
    return this.soulArticles.filter(item => item.name === name).pop() as SoulArticle;
  }
  
  changeSoul(name: string) {
    if (this.soul !== name) {
      this.getApi(name).subscribe(items => {
        // set data
        this.soul = name;
        this.soulArticles = items;
        // load css
        const soulUrl = `https://unpkg.com/@unistylus/${name}-css@latest/full.min.css`;
        const soulManagerEl = document.getElementById('soul-manager');
        if (soulManagerEl) {
          (soulManagerEl as any).href = soulUrl;
        }
      });
    }
  }

  private getApi(soulName: string) {
    const apiUrl = `https://unpkg.com/@unistylus/${soulName}@latest/api.json`;
    return this.fetchService.get(apiUrl).pipe(
      map(result => this.processApi(result as Array<string | string[]>)),
    );
  }

  private processApi(result: Array<string | string[]>) {
    return result
      .map((item, i) => {
        if (typeof item === 'string') {
          const name = item;
          const articleId = name.replace(/\//g, '-');
          const text = pascalCase(name.split('/').pop() as string);
          const soulArticle = {
            name,
            text,
            level: 1,
            routerLink: ['soul', articleId],
          } as SoulArticle;
          // next item
          const nextItem = result[i+1];
          if (nextItem && typeof nextItem !== 'string') {
            soulArticle.children = nextItem.sort();
          }
          // result
          return soulArticle;
        } else {
          return null;
        }
      })
      .filter(item => !!item)
      .sort((a, b) => (a as SoulArticle).text > (b as SoulArticle).text ? 1 : -1) as SoulArticle[];
  }
}
