module.exports = {
  extends: [
    'tslint:recommended',
    'tslint-eslint-rules',
  ],
  jsRules: {},
  rules: {
    align: false,
    'arrow-parens': false,
    indent: [ true, 'spaces', 2 ],
    'interface-name': false,
    'member-access': [ true, 'no-public' ],
    'object-literal-key-quotes': [ true, 'as-needed' ],
    'object-literal-sort-keys': false,
    quotemark: [ true, 'single', 'jsx-double' ],
    'no-shadowed-variable': false,
    'space-before-function-paren': [ true,
      {
        anomymous: 'always',
        name: 'never',
        asyncArrow: 'always',
        method: 'never',
        constructor: 'never',
      },
    ],
    'space-within-parens': [ true, 0 ],

    // Rules from tslint-eslint-rules.
    'array-bracket-spacing': [ true, 'always', { singleValue: false } ],
    'brace-style': [ true, '1tbs', { allowSingleLine: true }],
    'object-curly-spacing': [ true, 'always' ],
  },
  rulesDirectory: [],
};
