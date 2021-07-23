# Unistylus

An SCSS/CSS theming system.

- [What is this?](#why-is-this)
- [Install & usage](#install-and-usage)
  - [SCSS](#scss)
  - [CDN](#cdn)
- [Tutorials](#tutorials)
  - [Terminology](#terminology)
  - [Add new skins](#add-new-skins)
  - [Apply app skins](#apply-app-skins)
  - [Use icons](#Use-icons)
  - [Customization](#customization)
- [Properties](#properties)
  - [Builtin properties](#builtin-properties)
  - [Custom properties](#custom-properties)
- [Mixins](#mixins)

## What is this?

This is just another UI framework that nobody want to use, [but me](https://lamnhan.com), or isn't it?

It is an effort of balancing between convenience and customization.

If you want to build app that small, clean and have total control; or simply don't want to use other frameworks. You may give Unistylus a try:

- 💚 Just standard HTML, CSS/SCSS & JS (when needed).
- 🌓 Supports multiple skins in app runtime.
- 👌 No icon fonts; only register whatever icons you ever need.
- ⚡ Imports just the parts you want.
- 🔨 Customize to the bone, at microscopic level.
- 🔌 Drop in replacement (-ish) for other frameworks.
- 😍 A member of the [Lam Nhan Ecosystem](https://lamnhan.com/works).

## Install and usage

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

## Tutorials

### Terminology

In the context of the Unistylus framework, these terms have their special meaning.

- `SKIN`: a look of a UI (colors, sizes, fonts, ...)
- `SOUL`: a feel of a UI (Bootstrap, Material, ...)
- `THEME`: a combination of a SKIN (a look) or multiple skins + a SOUL (a feel)

### Add new skins

Add this to the global style file (ex.: [styles.scss](https://github.com/unistylus/core/blob/main/src/styles.scss) for Angular apps):

```scss
[data-theme=name] {
  // add properties here
}
```

### Apply app skins

Apply skin in runtime:

```js
document.body.setAttribute('data-theme', 'name');
```

### Use icons

Register icons globally, see [theming/app.component.scss](https://github.com/unistylus/core/blob/main/src/theming/app.component.scss) for example:

```scss
@import '@unistylus/core/scss/mixins';

$shared_icons: ();

$light_theme_icons: (
  menu: 'path/to/light/svg'
);

$dark_theme_icons: (
  menu: 'path/to/light/svg'
);

@include register_app_icons(
  (
    light: $light_theme_icons,
    dark: $dark_theme_icons,
    default: merge-map($shared_icons, $light_theme_icons),
  )
);
```

To use registered icons, in component `.html`:

```html
<i class="icon icon-menu"></i>
```

There are also built-in icon packs:
- Bootstrap: [@unistylus/bootstrap-icons](https://github.com/unistylus/bootstrap-icons)
- Material: [@unistylus/material-icons](https://github.com/unistylus/material-icons)

To access buit-in icon url, use the variable `$[icon_pack]_icons`:

```scss
@import '@unistylus/core/scss/mixins';

$light_theme_icons: (
  menu: '#{$bootstrap_icons}/light/list.svg'
);
```

### Customization

#### Level 1

To customize a skin (see [styles.scss](https://github.com/unistylus/core/blob/main/src/styles.scss) for example). Place this under the skin imports:

```scss
@import 'path/to/a/skin';

[data-theme=name] {
  // place properties here
}
```

#### Level 2

To customize a soul, override its CSS:

```scss
@import 'path/to/a/soul';

.button {
  // override anything
}
```

#### Level 3

Provide you own skin and soul, overall its just HTML & CSS, so you can do whatever you want.

```scss
@import 'path/to/your/own/skin';
@import 'path/to/your/own/soul';
```

## Properties

### Builtin properties

Fonts:

- `--app-font-head`: heading font, default: **Arial, sans-serif**
- `--app-font-body`: body font, default: **Arial, sans-serif**
- `--app-font-quote`: script & quote font, default: **Times New Roman, cursive**
- `--app-font-code`: code font, default: **Consolas, monospace**

Sizes:

- `--app-size-font`: body font size, default: **16px**
- `--app-size-radius`: radius size, default: **3px**
- `--app-size-border`: border size, default: **1px**

Colors:

Each supports 3 variants: `contrast`, `shade` and `tint`.

- `--app-color-primary`: primary size, default: **#3880ff**
- `--app-color-secondary`: secondary size, default: **#3dc2ff**
- `--app-color-tertiary`: tertiary size, default: **#5260ff**
- `--app-color-success`: success size, default: **#2dd36f**
- `--app-color-warning`: warning size, default: **#ffc409**
- `--app-color-danger`: danger size, default: **#eb445a**
- `--app-color-dark`: dark size, default: **#222428**
- `--app-color-medium`: medium size, default: **#92949c**
- `--app-color-light`: light size, default: **#f4f5f8**
- `--app-color-background`: background color
- `--app-color-foreground`: foreground color

Gradients:

- `app-gradient-primary`: primary gradient
- ... same for other palettes.

Recolors:

- `app-recolor-primary`: primary recolor
- ... same for other palettes.


### Custom properties

To add your own properties:

```scss
@import '@unistylus/core/scss/mixins';

$shared_properties: ();

$light_theme_properties: (
  foo: 'Foo',
  bar: 'Bar',
);

$dark_theme_properties: (
  foo: 'Foo',
  bar: 'Bar',
);

@include register_app_properties(
  (
    light: $light_theme_properties,
    dark: $dark_theme_properties,
    default: merge-map($shared_properties, $light_theme_properties),
  )
);
```

## Mixins

See [the list of mixins](https://github.com/unistylus/core/blob/main/projects/unistylus/src/scss/mixins).

## License

**@unistylus/core** is released under the [MIT](https://github.com/unistylus/core/blob/master/LICENSE) license.
