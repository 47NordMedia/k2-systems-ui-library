import fs from 'fs';
import { dashize } from './helper';
import tailwindConfig from '../tailwind.config.js';

const filePath = './dist';

function generateCssClass(className: string, content: string): string {
  //   const cssClass = `@layer components {
  //   .${className} {
  //     @apply ${content};
  //   }
  // }`;
  const dashedName = dashize(className);
  const cssClass = `.${dashedName} {
  @apply ${content};
}`;

  return cssClass;
}

export function createCssFile(classesObject: { [key: string]: string }): void {
  const cssClasses: Array<string> = [];

  let k: keyof typeof classesObject;
  for (k in classesObject) {
    const content: string = classesObject[k];
    const cssClass = generateCssClass(k, content);

    cssClasses.push(cssClass);
  }

  try {
    fs.mkdirSync(filePath, { recursive: true });
    fs.writeFileSync(`${filePath}/main.css`, cssClasses.join('\n'));
  } catch (error) {
    console.log(error);
  }
}

export function createScssOverwrites() {
  const {
    theme: { extend },
  } = tailwindConfig;
  const content = `
$sw-color-brand-primary: ${extend.colors.red};
$sw-color-brand-secondary: ${extend.colors.black};
$sw-color-price: ${extend.colors.darkGrey};

$sw-color-success: ${extend.colors.forestGreenAccent};
$sw-color-info: ${extend.colors.seaBlueAccent};
$sw-color-warning: ${extend.colors.orangeAccent};
$sw-color-danger: ${extend.colors.brownAccent};

$sw-background-color: ${extend.colors.white};
$sw-text-color:  ${extend.colors.black};
$sw-headline-color: ${extend.colors.darkGrey};
$sw-border-color: ${extend.colors.lightGrey};

$sw-color-buy-button: ${extend.colors.red};
$sw-color-buy-button-text: ${extend.colors.white};

//fonts
$sw-font-family-base: ${tailwindConfig.theme.extend.fontFamily.body
    .map((el) => (el === 'sans-serif' ? el : `'${el}'`))
    .join(', ')};
$sw-font-family-headline: ${tailwindConfig.theme.extend.fontFamily.body
    .map((el) => (el === 'sans-serif' ? el : `'${el}'`))
    .join(', ')};

//logos
$sw-logo-default: url('logo.png') !default;
$sw-logo-default-sm: url('logo.png') !default;
$sw-logo-default-md: url('logo.png') !default;
$sw-logo-default-lg: url('logo.png') !default;
$sw-logo-default-xl: url('logo.png') !default;

$sw-logo-share: url('logo-share.png') !default;
$sw-logo-favicon: url('logo-favicon.png') !default;
$sw-logo-app-icon: url('logo-app-icon.png') !default;
  `;

  try {
    fs.mkdirSync(filePath, { recursive: true });
    fs.writeFileSync(`${filePath}/shopwareOverwrites.scss`, content);
  } catch (error) {
    console.log(error);
  }
}
