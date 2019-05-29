const base = require('./base');

const reactConfig = Object.assign({}, base);
reactConfig.env = Object.assign({}, base.env, {
  browser: true,
});
reactConfig.plugins = [...base.plugins, 'import', 'jsx-a11y', 'react'];
reactConfig.rules = Object.assign({},
  base.rules, {
    'class-methods-use-this': [
      2,
      {
        exceptMethods: [
          'componentDidMount',
          'componentDidUpdate',
          'componentWillMount',
          'componentWillReceiveProps',
          'componentWillUnmount',
          'componentWillUpdate',
          'getChildContext',
          'getDefaultProps',
          'getInitialState',
          'render',
          'shouldComponentUpdate',
        ],
      },
    ],
    'jsx-quotes': [2, 'prefer-double'],
  }, {
    'import/default': 0,
    'import/export': 2,
    'import/extensions': [2, 'always', { js: 'never', jsx: 'never' }],
    'import/first': [2, 'absolute-first'],
    'import/imports-first': 0,
    'import/max-dependencies': [0, { max: 10 }],
    'import/named': 0,
    'import/namespace': 0,
    'import/newline-after-import': 2,
    'import/no-absolute-path': 2,
    'import/no-amd': 2,
    'import/no-commonjs': 0,
    'import/no-deprecated': 0,
    'import/no-duplicates': 2,
    'import/no-dynamic-require': 2,
    'import/no-internal-modules': [0, { allow: [] }],
    'import/no-mutable-exports': 2,
    'import/no-named-as-default': 2,
    'import/no-named-as-default-member': 2,
    'import/no-named-default': 2,
    'import/no-namespace': 0,
    'import/no-nodejs-modules': 0,
    'import/no-restricted-paths': 0,
    'import/no-unassigned-import': 0,
    'import/no-unresolved': [2, { commonjs: true, caseSensitive: true }],
    'import/no-webpack-loader-syntax': 2,
    'import/order': [
      0,
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'never',
      },
    ],
    'import/prefer-default-export': 2,
    'import/unambiguous': 0,
  }, {
    'react/display-name': [0, { ignoreTranspilerName: false }],
    'react/forbid-component-props': 0,
    'react/forbid-prop-types': [2, { forbid: ['any', 'array', 'object'] }],
    'react/jsx-boolean-value': [2, 'never'],
    'react/jsx-closing-bracket-location': [2, 'line-aligned'],
    'react/jsx-curly-spacing': [2, 'never', { allowMultiline: true }],
    'react/jsx-equals-spacing': [2, 'never'],
    'react/jsx-filename-extension': [2, { extensions: ['.jsx', '.js'] }],
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-handler-names': 0,
    'react/jsx-indent': [2, 4],
    'react/jsx-indent-props': [2, 4],
    'react/jsx-key': 0,
    'react/jsx-max-props-per-line': 0,
    'react/jsx-no-bind': [2, { ignoreRefs: true, allowArrowFunctions: true, allowBind: false }],
    'react/jsx-no-comment-textnodes': 2,
    'react/jsx-no-duplicate-props': [2, { ignoreCase: true }],
    'react/jsx-no-literals': 0,
    'react/jsx-no-target-blank': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-pascal-case': [2, { allowAllCaps: true, ignore: [] }],
    'react/jsx-sort-prop-types': 0,
    'react/jsx-sort-props': 0,
    'react/jsx-tag-spacing': [2, { closingSlash: 'never', beforeSelfClosing: 'always', afterOpening: 'never' }],
    'react/jsx-uses-react': [2],
    'react/jsx-uses-vars': 2,
    'react/jsx-wrap-multilines': [2, { declaration: true, assignment: true, return: true }],
    'react/no-array-index-key': 2,
    'react/no-children-prop': 2,
    'react/no-comment-textnodes': 0, // deprecated version
    'react/no-danger': 1,
    'react/no-danger-with-children': 2,
    'react/no-deprecated': [2],
    'react/no-did-mount-set-state': [2],
    'react/no-did-update-set-state': [2],
    'react/no-direct-mutation-state': 0,
    'react/no-find-dom-node': 2,
    'react/no-is-mounted': 2,
    'react/no-multi-comp': 0,
    'react/no-render-return-value': 2,
    'react/no-set-state': 0,
    'react/no-string-refs': 2,
    'react/no-unescaped-entities': 2,
    'react/no-unknown-property': 2,
    'react/no-unused-prop-types': [2, { customValidators: [], skipShapeProps: true }],
    'react/prefer-es6-class': [2, 'always'],
    'react/prefer-stateless-function': 0,
    'react/prop-types': [2, { ignore: [], customValidators: [] }],
    'react/react-in-jsx-scope': 2,
    'react/require-default-props': 2,
    'react/require-extension': 0,
    'react/require-optimization': 0,
    'react/require-render-return': 2,
    'react/self-closing-comp': 2,
    'react/sort-comp': [
      2,
      {
        order: [
          'static-methods',
          'lifecycle',
          '/^on.+$/',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'everything-else',
          '/^render.+$/',
          'render',
        ],
      },
    ],
    'react/sort-prop-types': 0,
    'react/style-prop-object': 2,
    'react/wrap-multilines': 0, // deprecated version
  });

reactConfig.settings = Object.assign({}, base.settings, {
  'import/ignore': ['node_modules', '\\.(coffee|scss|css|less|hbs|svg|json)$'],
  'import/resolver': {
    node: {
      extensions: ['.js', '.jsx', '.json'],
    },
  },
});

reactConfig.parserOptions = {
  ecmaVersion: 8,
  sourceType: 'module',
  ecmaFeatures: {
    modules: true,
    jsx: true,
    experimentalObjectRestSpread: true,
    experimentalDecorators: true,
  },
};

const baseReactSettings = base.settings.react || {};

reactConfig.settings = {
  ...base.settings,
  react: {
    ...baseReactSettings,
    version: 'detect',
  },
};


module.exports = reactConfig;
