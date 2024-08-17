const path = require('path');

module.exports = {
  // Type check TypeScript files
  'src/**/*.(ts|tsx)': () => 'pnpm run type-check',

  // Lint TS and JS files
  'src/**/*.(ts|tsx|js)': (filenames) =>
    `eslint --fix ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')}`,

  // Prettify CSS, TS and JS files
  'src/**/*.(css|ts|tsx|js)': (filenames) =>
    `prettier --write ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')}`,
};
