import fs from 'fs';
import yargs from 'yargs/yargs';

import { createClassTsFile, createIndexTsFile } from './tsBuilder';
import { createCssFile, createScssOverwrites } from './cssBuilder';
import { camelize } from './helper';
import path from 'path';

const argv = yargs(process.argv.slice(2))
  .options({
    c: { type: 'string', alias: 'classname' },
    l: { type: 'string', alias: 'classlist' },
    s: { type: 'boolean', alias: 'createstyle' },
    i: { type: 'boolean', alias: 'listicons' },
    o: { type: 'boolean', alias: 'scssoverwrites' },
  })
  .parseSync();

if (argv.c && argv.l) {
  console.log(`Create ${camelize(argv.c)}.ts file based on tailwind classes: ${argv.l}`);

  createClassTsFile(argv.c, argv.l);
  createIndexTsFile();
}

if (argv.s) {
  console.log('Create ./src/styles/main.css based on ./src/index.ts');

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const classes = require('../index');

  createCssFile(classes.default);
}

if (argv.i) {
  const iconList = [
    '15min',
    'balance',
    'bitum',
    'brochure',
    'cables',
    'calender',
    'certificates',
    'chat',
    'cheklists',
    'coffee',
    'concrete',
    'connected',
    'coupon',
    'data-gather',
    'deliver',
    'diamonds',
    'digiBA',
    'digiDO',
    'download',
    'droplets',
    'family',
    'faq',
    'fibercement',
    'flatroof',
    'floating',
    'foil',
    'gravel-roof',
    'green',
    'greenroof',
    'group',
    'happy',
    'katalog',
    'layers',
    'location',
    'metalroof',
    'multifaceted',
    'outdoor',
    'parking',
    'party',
    'phone',
    'pin',
    'pitchroof',
    'power',
    'rolls',
    'safe',
    'school',
    'secured',
    'shield',
    'slidetiltroof',
    'special',
    'sun',
    'tileroof',
    'tileroof-oldstyle',
    'time',
    'tool',
    'toolbox',
    'train1',
    'train2',
    'train3',
    'trapezodialroof',
    'turnoff',
    'wavyroof',
    'world',
    // Countries -----------
    // 'flag-at',
    // 'flag-au',
    // 'flag-be',
    // 'flag-br',
    // 'flag-co',
    // 'flag-hr',
    // 'flag-cz',
    // 'flag-dk',
    // 'flag-ee',
    // 'flag-fi',
    // 'flag-fr',
    // 'flag-gr',
    // 'flag-de',
    // 'flag-hu',
    // 'flag-in',
    // 'flag-ie',
    // 'flag-it',
    // 'flag-jp',
    // 'flag-lv',
    // 'flag-lt',
    // 'flag-lu',
    // 'flag-mc',
    // 'flag-mx',
    // 'flag-nl',
    // 'flag-no',
    // 'flag-pl',
    // 'flag-pt',
    // 'flag-ro',
    // 'flag-rs',
    // 'flag-si',
    // 'flag-es',
    // 'flag-za',
    // 'flag-se',
    // 'flag-ch',
    // 'flag-tr',
    // 'flag-uk',
    // 'flag-us',
  ];

  const wrapperStart = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="/output.css" />
      <title>UI Library Overview</title>
    </head>
    <body class="p-4 sm:p-8 bg-[#f4f4f4]"><ul>`;
  const wrapperEnd = `</ul><script src="/icons_compiled.js"></script>
  <script>
    initIcons();
  </script>
</body>
</html>`;

  const result = `${wrapperStart}
  ${iconList
    .map(
      (iconName) =>
        `<li display="flex"><span class="icon icon-${iconName}-64 h-16 w-16"></span><p class="text-light ml-7 mb-7">${iconName}</p></li>`
    )
    .join('\n')}
  ${wrapperEnd}`;

  fs.writeFileSync(path.join(__dirname, '..', '/iconOverview.html'), result, { encoding: 'utf8', flag: 'w' });
}

if (argv.o) {
  createScssOverwrites();
}
