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
@tailwind utilities;

@layer components {
  /* NOT TESTED YET, MIGHT NEED POSTCSS CONFIG */
  @import './node_modules/<library>/dist/main.css';
}
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
