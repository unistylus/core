## Basic usage

### SCSS

Install using npm:

```sh
# skins & mixins
npm install --save @unistylus/core

# soul
npm install --save @unistylus/bootstrap
```

Incuding skin(s) and soul:

```scss
// I. Choose a skin (or multiple skins)

//     1. Must has a default one (surfixed 'default')
@import '@unistylus/core/scss/skins/light-default';

//     2. And, other skins if you want
@import '@unistylus/core/scss/skins/dark';

// II. Choose a soul

//     1. (NOT RECOMMENDED) Include all parts (and variations)
@import '@unistylus/bootstrap/full';

//     2. (RECOMMENDED) Just the part you needed ('core.scss' is required)
@import '@unistylus/bootstrap/reset';
@import '@unistylus/bootstrap/core';
@import '@unistylus/bootstrap/content/typography';
@import '@unistylus/bootstrap/components/button';
```

To use minxins:

```scss
@import '@unistylus/core/scss/mixins';
```

### CDN

Includes in your HTML:

```html
<!-- I. Choose a skin (or multiple skins) -->

<!--     1. Must has a default one (surfixed 'default') -->
<link rel="stylesheet" href="https://unpkg.com/@unistylus/core@latest/css/skins/light-default.min.css">

<!--     2. And, other skins if you want -->
<link rel="stylesheet" href="https://unpkg.com/@unistylus/core@latest/css/skins/dark.min.css">

<!-- II. Choose a soul -->

<!--     1. (NOT RECOMMENDED) Include all parts (and variations) -->
<link rel="stylesheet" href="https://unpkg.com/@unistylus/bootstrap-css@latest/full.min.css">

<!--     2. (RECOMMENDED) Just the part you needed ('core.css/core.min.css' is required)  -->
<link rel="stylesheet" href="https://unpkg.com/@unistylus/bootstrap-css@latest/reset.min.css">
<link rel="stylesheet" href="https://unpkg.com/@unistylus/bootstrap-css@latest/core.min.css">
<link rel="stylesheet" href="https://unpkg.com/@unistylus/bootstrap-css@latest/content/typography.min.css">
<link rel="stylesheet" href="https://unpkg.com/@unistylus/bootstrap-css@latest/components/button.min.css">
```
