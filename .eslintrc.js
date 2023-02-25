module.exports = {
  root: true,
  extends: ['react-app', 'react-app/jest', 'prettier'],
  plugins: ['react-hooks'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: ['.eslintrc.js'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
  rules: {
    'max-len': ['warn', { code: 108 }],
    quotes: ['warn', 'single'],
    'object-curly-spacing': ['error', 'always'],
    'react/jsx-curly-spacing': [
      'error',
      {
        children: true,
      },
    ],
    'template-curly-spacing': 'error',
    semi: 'error',
  },
};
