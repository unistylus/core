## Skin

A skin is a way an app looks.

### Builtin skins

Currently, there are 2 built-in skins: light and dark.

Use the skin selector to see built-in light and dark skin in action.

### Customize a skin

Change how built-in skin looks.

```scss
// styles.scss -> customize the 'light' theme
[data-theme=light] {
  --app-color-primary: ...;
}
```

See, [list of CSS properties](https://github.com/unistylus/core/blob/main/projects/unistylus/src/scss/properties/_default.scss) for the new skin.

### Add a skin

You can also create your own skins.

```scss
// styles.scss -> new skin name 'foo'
[data-theme=foo] {
  --app-color-primary: ...;
}
```

See, [list of CSS properties](https://github.com/unistylus/core/blob/main/projects/unistylus/src/scss/properties/_default.scss) for the new skin.
