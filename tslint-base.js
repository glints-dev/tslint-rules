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
    'object-literal-sort-keys': false,
    quotemark: [ true, 'single', 'jsx-double' ],
    'no-shadowed-variable': false,
    'object-curly-spacing': [ true, 'always' ],
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
  },
  rulesDirectory: [],
};
