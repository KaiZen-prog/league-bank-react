module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  ignorePatterns: ['node_modules/*', '.next/*', '.out/*', '!.prettierrc.js'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'htmlacademy/react', 'plugin:react-hooks/recommended'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx','**/*.js', '**/*.jsx', '**/*.svg'],
      settings: { react: { version: 'detect' } },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
      ],
      rules: {
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        'no-console': 'off',
        'no-shadow': 'off',
        'no-unused-vars': 'off',
        'no-mixed-spaces-and-tabs': 0,
        'react/no-array-index-key': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-noninteractive-element-interactions': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/no-noninteractive-tabindex': 'off',
        'jsx-a11y/no-autofocus': 'off',
        'jsx-a11y/anchor-has-content': 'off',
      },
    },
  ],
};
