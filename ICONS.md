# Icon Library

## Available Icons

[HERE](./src/icons.ts)

## Setup

```js
import { initIcons, icons } from '@47nordmedia/k2-systems-ui-library/dist/icons';

// init icon library
initIcons();

// list of all available icons
console.log(icons)
```

```js
const icons = require('@47nordmedia/k2-systems-ui-library/dist/icons');

// init icon library
icons.initIcons();

// list of all available icons
console.log(icons.icons)
```

There is also a `icons_compiled.js` file in the `/dist` folder, which can be used in the browser without transpiling it first.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <script type="module" src="<path-to-@47nordmedia/k2-systems-ui-library/dist/icons_compiled.js>"></script>
</body>
</html>
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
