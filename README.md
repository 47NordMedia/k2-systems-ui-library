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
  presets: [require("<library>/tailwind.config.js")],
  // config specific to this project would go here
  // ...
};
```

## Usage

### HTML

todo...

#### Example (HTML)

todo...

### JS Framework

todo ...

#### Example (react.js)

```js
import { classes } from "<library>";

export default function Button() {
  return <div className={`${classes.button} ...`}>Hello World!</div>;
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
