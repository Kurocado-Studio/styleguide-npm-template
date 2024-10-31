module.exports = {
  extends: [
    require.resolve('@kurocado-studio/styleguide/eslint/node'),
    require.resolve('@kurocado-studio/styleguide/eslint/react'),
  ],
  parserOptions: {
    ecmaVersion: 2020,
    project: './tsconfig.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ['build/**/*'],
  settings: {
    'import/resolver': {
      alias: {
        map: [['~', './app']],
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
  rules: {
    'import/no-cycle': 'off',
  },
  overrides: [
    {
      files: ['app/**/*.ts', 'app/**/*.tsx'],
    },
  ],
};
