# K2 Systems library

## Description

This library is used as a single source for UI elements throughout the K2 Systems' digital services.

## Setup

### Prerequisites

- Tailwind.css >= 3

### tailwind.config.js

Add the config file of the ui-library to your `tailwind.config.js`

```js
module.exports = {
  presets: [require('<library>/dist/tailwind.config.js')],
  // config specific to this project would go here
  // ...
};
```

### HTML / PHP

Add the custom classes to your existing css files.

```css
@tailwind base;
@tailwind components;

/* NOT TESTED YET, MIGHT NEED POSTCSS CONFIG */
@import './node_modules/<library>/dist/main.css';

@tailwind utilities;
```

## Usage

### HTML

todo...

#### Example (HTML, PHP)

```html
<div class="button ...">Hello World!</div>
```

### JS Framework

todo ...

#### Example (react.js)

```js
import uiClasses from '<library>';

export default function Button() {
  return <div className={`${uiClasses.button} ...`}>Hello World!</div>;
}
```

## Workflow for adding new components

- [Open new issue](https://github.com/47NordMedia/k2-systems-ui-library/issues/new/choose) via 'new ui component' template.
- Set the issue to 'approved' once its tested and reviewed.
- [Open new pull request](https://github.com/47NordMedia/k2-systems-ui-library/compare) and link the created issue.
- Merge pull request to main.
- Check build workflow for potential errors.
- Update ui library in you project to latest version.

### Multiple issues for nested components

- to do...

## Examples

To structure nested related components we use an **adapted BEM** naming convention.
The CSS part will be the standard BEM convention.

The JS part however will replace the **dash-case** naming convention and replace it with the **camelCase** naming convention.

All the CSS classes will be generated out of the JavaScript files. Below you can see how the classnames are being converted.

```txt
navMenu (js) --> nav-menu (css)
navMenu__item (js) --> nav-menu__item (css)
```

```html
<nav class="nav-menu">
  <li class="nav-menu__item"></li>
  <li class="nav-menu__item"></li>
  <li class="nav-menu__item active"></li>
</nav>
```

```ts
// navMenu.ts
export default 'flex align-center justify-between';

// navMenu__item.ts
export default 'p-2 bg-gray-100 rounded-xl hover:bg-gray-200';

// index.ts
import navMenu from './classes/navMenu';
import navMenu__item from './classes/navMenu__item';

export default {
  navMenu: navMenu,
  navMenu__item: navMenu__item,
};
```

## CLI Interface & CI/CD usage

### CLI

To add a new class to the `classes` list, simply run:

```bash
yarn run build:js -c '<new-class-name>' -l '<tailwind classes>'
```

e.g.

```bash
yarn run build:js -c 'button' -l 'bg-gray-100 rounded-xl hover:bg-gray-200'
```

To generate a corresponding CSS file run:

```bash
yarn run build:css
```

### CI/CD

fully automated process coming soon...

- Creation of a new branch based on the component name.
- Fetching of the `ui-component` issue content.
- Execution of the CLI with the content of the issue.
- Creation of an pull request.
- Publishing the updated code to a private npm package.
