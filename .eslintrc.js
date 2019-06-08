const eslintrc = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      js: true,
      tsx: true,
      jsx: true
    },
    useJSXTextNode: true,
    project: './tsconfig.json'
  },
  plugins: ['markdown', 'react', 'babel', 'jest', '@typescript-eslint'],
  env: {
    browser: true,
    node: true,
    jasmine: true,
    jest: true,
    es6: true
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-indent': 0,
    'react/jsx-wrap-multilines': [
      'error',
      { declaration: false, assignment: false }
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'example/**',
          'tests/**',
          'scripts/**',
          '**/*.test.js',
          '**/__tests__/*',
          '*.config.js',
          '**/*.md'
        ]
      }
    ],
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.tsx', '.md'] }
    ],
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-has-content': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'comma-dangle': ['error', 'always-multiline']
  }
}

module.exports = eslintrc
