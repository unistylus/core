## Basic usage

Use the framework with SCSS or CSS from a CDN.

### SCSS

- Step 1: Install the core

```bash
npm i @unistylus/core
```

- Step 2: Install a collection (see [list](/guide/terminology))

```bash
npm i @unistylus/boostrap
```

- Step 3: Create a file in `src/unistylus.scss`

```scss
@import '@unistylus/bootstrap/skins/light-default';
@import '@unistylus/bootstrap/reset';
@import '@unistylus/bootstrap/core';
@import '@unistylus/bootstrap/content/typography';
@import '@unistylus/bootstrap/components/button';

```

- Step 4 (OPTIONAL): To use minxins

```scss
@import '@unistylus/core';
```

### CDN

Includes in your HTML:

```html
<link rel="stylesheet" href="https://unpkg.com/@unistylus/bootstrap-css@latest/skins/light-default.min.css">
<link rel="stylesheet" href="https://unpkg.com/@unistylus/bootstrap-css@latest/reset.min.css">
<link rel="stylesheet" href="https://unpkg.com/@unistylus/bootstrap-css@latest/core.min.css">
<link rel="stylesheet" href="https://unpkg.com/@unistylus/bootstrap-css@latest/content/typography.min.css">
<link rel="stylesheet" href="https://unpkg.com/@unistylus/bootstrap-css@latest/components/button.min.css">
```
