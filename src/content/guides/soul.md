## Soul

A soul is a way an app feels.

### Builtin souls

Currently, there are 1 built-in soul: bootstrap and material.

### Customize a soul

Change how built-in soul feels (just override the class).

```scss
.button {
  // any
}
```

### Add a soul

Just add your own CSS classes.

```scss
.button {
  // any
}
```

### Reset

Some CSS reset, see [reset.scss](/part/reset).

### Core

Set font family, font size, background and foreground colors, see [core.scss](/part/core).

### Full

Including reset, core and everything else. Use this for quick prototyping.

This is NOT RECOMMENDED in production, it includes all the parts and their variations, many of them are unused in most projects. Instead import just the code you need.

See [full.scss](/part/full).
