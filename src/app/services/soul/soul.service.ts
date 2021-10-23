import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoulService {
  soul = '';

  constructor() {}
  
  changeSoul(name: string) {
    if (this.soul === name) return;
    this.soul = name;
    // skin light
    const skinLightUrl = `https://unpkg.com/@unistylus/${name}-css@latest/skins/light-default.min.css`;
    const skinLightEl = document.getElementById('skin-light');
    if (skinLightEl) {
      (skinLightEl as any).href = skinLightUrl;
    }
    // skin dark
    const skinDarkUrl = `https://unpkg.com/@unistylus/${name}-css@latest/skins/dark.min.css`;
    const skinDarkEl = document.getElementById('skin-dark');
    if (skinDarkEl) {
      (skinDarkEl as any).href = skinDarkUrl;
    }
    // soul
    const soulUrl = `https://unpkg.com/@unistylus/${name}-css@latest/full.min.css`;
    const soulManagerEl = document.getElementById('soul-manager');
    if (soulManagerEl) {
      (soulManagerEl as any).href = soulUrl;
    }
  }
}
