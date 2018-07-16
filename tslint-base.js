module.exports = {
  extends: [
    'tslint:recommended',
  ],
  jsRules: {},
  rules: {
    align: false,
    'arrow-parens': false,
    indent: [ true, 'spaces', 2 ],
    'interface-name': false,
    'member-access': [ true, 'no-public' ],
    'object-literal-sort-keys': false,
    quotemark: [ true, 'single' ],
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
  },
  rulesDirectory: [],
};
