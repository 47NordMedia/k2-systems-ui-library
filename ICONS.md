# Icon Library

## Available Icons

- `secured-64`

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

e.g.:

```html
<span class="icon icon-secured-64"></span>
```
