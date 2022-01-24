import fs from 'fs';
import { dashize } from './helper';

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
