import fs from 'fs';
import { camelize } from './helper';

const filePath = './src';

export function createClassTsFile(fileName: string, classList: string): void {
  const fileContent = `export default '${classList}';`;
  const camelCase = camelize(fileName);

  try {
    fs.writeFileSync(`${filePath}/classes/${camelCase}.ts`, fileContent);
  } catch (error) {
    console.log(error);
  }
}

export function createIndexTsFile(): void {
  const regex = new RegExp('\\w.ts$', 'g');
  const filenames = fs
    .readdirSync(`${filePath}/classes`)
    .filter((filename) => filename.match(regex))
    .map((filename) => filename.split('.ts')[0]);

  const importStatements = filenames.map((key) => {
    return `import ${key} from './classes/${key}';`;
  });
  const exportStatements = filenames.map((key) => {
    return `${key}: ${key},`;
  });
  const fileContent = `${importStatements.join('\n')}

export default {
  ${exportStatements.join('\n  ')}
};
    `;

  try {
    fs.writeFileSync(`${filePath}/index.ts`, fileContent);
  } catch (error) {
    console.log(error);
  }
}
