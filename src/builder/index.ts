import yargs from 'yargs/yargs';

import { createClassTsFile, createIndexTsFile } from './tsBuilder';
import { createCssFile, createScssOverwrites } from './cssBuilder';
import { camelize } from './helper';

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
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const iconList = require('../iconList');

  console.log(
    Object.entries(iconList).map((iconKey) => {
      console.log(iconKey);
    })
  );
}

if (argv.o) {
  createScssOverwrites();
}
