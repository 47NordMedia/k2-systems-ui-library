# Icon Library

## Available Icons

[HERE](./src/icons.ts)

## Setup

```js
import { initIcons, icons } from '@47nordmedia/k2-systems-ui-library/icons';

// init icon library
initIcons();

// list of all available icons
console.log(icons)
```


```js
const icons = require('@47nordmedia/k2-systems-ui-library/icons');

// init icon library
icons.initIcons();

// list of all available icons
console.log(icons.icons)
```

## Usage

Use a `span` element with the classes `icon icon-<iconname>` to add a SVG icon (handled by javascript)

The `span` element will get replaced with the `svg` element and inherit the classes from the initial `span`.

e.g.:

```html
<span class="icon icon-secured-64 h-16 w-16"></span>
```

will be replaced with

```html
<svg class="icon icon-secured-64 h-16 w-16" ....
```
