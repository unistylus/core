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

It is an effort of unifying the web UI development experience:

- 💚 Just standard HTML, CSS/SCSS & JS (when needed).
- 🌓 Supports multiple skins in app runtime.
- 👌 No icon fonts; only register whatever icons you ever need.
- ⚡ Imports just the parts you want.
- 🔨 Customize to the bone, at microscopic level.
- 🔌 Replacement (-ish) for other frameworks.
- 😍 A member of the [Lam Nhan Ecosystem](https://lamnhan.com/works).

## Install and usage

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

Register icons globally, see [styles.scss](https://github.com/unistylus/core/blob/main/src/styles.scss) for example:

```scss
@import '@unistylus/core';

$icons: (
  menu: ('bootstrap', 'list', 'latest'),
  github: ('bootstrap', 'github', 'latest')
);

@include register_icons($icon);
```

To use registered icons, in component `.html`:

```html
<i class="icon icon-menu"></i>
```

There are also built-in icon packs:
- Bootstrap: [@unistylus/bootstrap-icons](https://github.com/unistylus/bootstrap-icons)
- Material: [@unistylus/material-icons](https://github.com/unistylus/material-icons)
- Fluent: [@unistylus/fluent-icons](https://github.com/unistylus/fluent-icons)

To access buit-in icon url, use the variable `$[icon_pack]_icons`:

```scss
@import '@unistylus/core';

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

### Custom properties

To add your own properties:

```scss
@import '@unistylus/core';

$shared_properties: ();

$light_theme_properties: (
  foo: 'Foo',
  bar: 'Bar',
);

$dark_theme_properties: (
  foo: 'Foo',
  bar: 'Bar',
);

@include register_theme_properties(
  (
    light: $light_theme_properties,
    dark: $dark_theme_properties,
    default: merge-map($shared_properties, $light_theme_properties),
  )
);
```

## Mixins

See [the list of mixins](https://github.com/unistylus/core/blob/main/projects/unistylus/src/mixins).

## License

**@unistylus/core** is released under the [MIT](https://github.com/unistylus/core/blob/master/LICENSE) license.
