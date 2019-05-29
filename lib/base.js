const rules = {
    'accessor-pairs': [
        1,
        { // warn when a setter/getter is used without corresponding set/get
            getWithoutSet: true,
            setWithoutGet: true,
        },
    ],
    'array-bracket-newline': [2, { minItems: null, multiline: true }], // require bracket newlines if there are newlines in or after elements
    'array-bracket-spacing': [2, 'never'], // Spaces before and after array brackets are not required or allowed
    'array-callback-return': 2,
    'array-element-newline': 0, // let the dev decide when array element newlines make sense
    'arrow-body-style': 0, // let the dev decide what format of arrow body is the easiest to read
    'arrow-parens': 0,
    'arrow-spacing': 2,
    'babel/no-invalid-this': 2,
    'block-scoped-var': 2,
    'block-spacing': [2, 'always'],
    'brace-style': [2, '1tbs', { allowSingleLine: true }],
    'callback-return': 0, // Not used, since it requires specific callback names
    camelcase: [2, { properties: 'never' }], // Allow object properties to use different schema, since they might required be for an external API
    'capitalized-comments': 0, // Who cares about cOmment capitalization?
    'class-methods-use-this': [2],
    'comma-dangle': [
        2,
        {
            arrays: 'always-multiline',
            exports: 'always-multiline',
            functions: 'always-multiline',
            imports: 'always-multiline',
            objects: 'always-multiline',
        },
    ],
    'comma-spacing': [2, { after: true, before: false }],
    'comma-style': [2, 'last'],
    complexity: [1, 15],
    'computed-property-spacing': [2, 'never'],
    'consistent-return': 2,
    'consistent-this': 0, // We shouldn't need to use that = this nonsense any more.
    'constructor-super': 2, // If we're using class inheritance (which we shouldn't be doing often), require a super() call.
    curly: [2, 'multi-line'],
    'default-case': 2, // case statements should have a default case
    'dot-location': [2, 'property'],
    'dot-notation': [2, { allowKeywords: true }],
    'eol-last': [2, 'always'],
    eqeqeq: [2, 'always', { null: 'ignore' }],
    'func-call-spacing': [2, 'never'],
    'func-name-matching': [2, 'always', { includeCommonJSModuleExports: false }], // require named function to match assigned variable, if this is ever used
    'func-names': 1,
    'func-style': [2, 'declaration', { allowArrowFunctions: true }],
    'generator-star-spacing': [2, { after: true, before: false }],
    'getter-return': 2,
    'guard-for-in': 2,
    'handle-callback-err': 0, // not using since this requires specifgic naming conventions around callback errors
    'id-blacklist': 0, // allow identifiers to be named freely
    'id-length': 0, // allow identifiers to have any length
    'id-match': 0, // don't require a specific regex match for identifiers
    indent: [
        2,
        4,
        {
            FunctionDeclaration: {
                body: 1,
                parameters: 1,
            },
            FunctionExpression: {
                body: 1,
                parameters: 1,
            },
            outerIIFEBody: 1,
            SwitchCase: 1, // require an indentation under case clauses in switch statements
            VariableDeclarator: 1,
        },
    ],
    'init-declarations': 0, // Don't worry about inititializing variables separately from assigning
    'key-spacing': [2, { afterColon: true, beforeColon: false }],
    'keyword-spacing': [
        2,
        {
            after: true,
            before: true,
            overrides: {
                case: { after: true },
                return: { after: true },
                throw: { after: true },
            },
        },
    ],
    'line-comment-position': [ // don't worry about line comment (//) location
        0,
        {
            applyDefaultPatterns: true,
            ignorePattern: '',
            position: 'above',
        },
    ],
    'linebreak-style': [2, 'unix'],
    'lines-around-comment': 0, // Don't worry about empty lines related to comments
    'lines-around-directive': [2, { after: 'always', before: 'always' }],
    'max-depth': [2, 8],
    'max-len': [
        2,
        1000,
        4,
        {
            ignoreComments: true,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
            ignoreUrls: true,
        },
    ],
    'max-lines': [2, { max: 600, skipBlankLines: true, skipComments: true }],
    'max-nested-callbacks': [2, { max: 6 }],
    'max-params': [2, 6],
    'max-statements': [2, { max: 30 }],
    'max-statements-per-line': [2, { max: 3 }],
    'multiline-ternary': 0,
    'new-cap': [
        2,
        {
            capIsNew: false,
            capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
            newIsCap: true,
            newIsCapExceptions: [],
        },
    ],
    'new-parens': 2,
    'newline-after-var': 0, // Dont worry about newlines around var/let/const statements
    'newline-before-return': 0, // Dont worry about newlines before return statements
    'newline-per-chained-call': [2, { ignoreChainWithDepth: 2 }],
    'no-alert': 2,
    'no-array-constructor': 2,
    'no-await-in-loop': 2,
    'no-bitwise': 2,
    'no-caller': 2,
    'no-case-declarations': 2,
    'no-catch-shadow': 0, // catch has its own scope -- no need
    'no-class-assign': 2,
    'no-compare-neg-zero': 2,
    'no-cond-assign': [2, 'always'],
    'no-confusing-arrow': [2, { allowParens: true }],
    'no-console': [1, { allow: ['error'] }],
    'no-const-assign': 2,
    'no-constant-condition': 1,
    'no-continue': 2,
    'no-control-regex': 2,
    'no-debugger': 1,
    'no-delete-var': 2,
    'no-div-regex': 2,
    'no-dupe-args': 2,
    'no-dupe-class-members': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-duplicate-imports': 2,
    'no-else-return': 2,
    'no-empty': 2,
    'no-empty-character-class': 2,
    'no-empty-function': [2, { allow: ['arrowFunctions', 'functions', 'methods'] }],
    'no-empty-pattern': 2,
    'no-eq-null': 2,
    'no-eval': 2,
    'no-ex-assign': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-label': 2,
    'no-extra-parens': [
        2,
        'all',
        {
            conditionalAssign: true, // Don't allow arbitrary parens around conditionals
            enforceForArrowConditionals: false, // Allow around fat-arrow ternary returns
            ignoreJSX: 'all', // Allow around JSX returns
            nestedBinaryExpressions: false, // allow nesting/grouping in binary statements
            returnAssign: true, // don't allow in return assignments unless covered by another option
        },
    ],
    'no-extra-semi': 2,
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-func-assign': 2,
    'no-global-assign': [2, { exceptions: [] }],
    'no-implicit-coercion': [
        2,
        {
            allow: [],
            boolean: false,
            number: true,
            string: true,
        },
    ],
    'no-implicit-globals': 2,
    'no-implied-eval': 2,
    'no-inline-comments': 0, // inline comments are fine, see??
    'no-inner-declarations': 2,
    'no-invalid-regexp': 2,
    'no-invalid-this': 0, // see babel/no-invalid-this
    'no-irregular-whitespace': 2,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-labels': [2, { allowLoop: false, allowSwitch: false }],
    'no-lone-blocks': 2,
    'no-lonely-if': 2,
    'no-loop-func': 2,
    'no-magic-numbers': [
        0,
        {
            detectObjects: true,
            enforceConst: true,
            ignore: [0, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100, 1000],
            ignoreArrayIndexes: true,
        },
    ],
    'no-mixed-operators': [
        2,
        {
            allowSamePrecedence: false,
            groups: [
                ['+', '-', '*', '/', '%', '**'],
                ['&', '|', '^', '~', '<<', '>>', '>>>'],
                ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
                ['&&', '||'],
                ['in', 'instanceof'],
            ],
        },
    ],
    'no-mixed-requires': [2, false],
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-assign': [2],
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-multiple-empty-lines': [2, { max: 2, maxEOF: 1 }],
    'no-native-reassign': 2,
    'no-negated-condition': 2,
    'no-negated-in-lhs': 2,
    'no-nested-ternary': 2,
    'no-new': 2,
    'no-new-func': 2,
    'no-new-object': 2,
    'no-new-symbol': 2,
    'no-new-wrappers': 2,
    'no-obj-calls': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-param-reassign': [
        2,
        {
            ignorePropertyModificationsFor: [
                'acc', // for reduce accumulators
                'e', // for e.returnvalue
                'ctx', // for Koa routing
                'req', // for Express requests
                'request', // for Express requests
                'res', // for Express responses
                'response', // for Express responses
                '$scope', // for Angular 1 scopes
            ],
            props: true,
        },
    ],
    'no-path-concat': 2,
    'no-plusplus': 2,
    'no-proto': 2,
    'no-prototype-builtins': 2,
    'no-redeclare': 2,
    'no-regex-spaces': 2,
    'no-restricted-globals': 2,
    'no-restricted-imports': 2,
    'no-restricted-modules': 2,
    'no-restricted-properties': [
        2,
        {
            message: 'arguments.callee is deprecated',
            object: 'arguments',
            property: 'callee',
        },
        {
            message: 'Please use Object.defineProperty instead.',
            property: '__defineGetter__',
        },
        {
            message: 'Please use Object.defineProperty instead.',
            property: '__defineSetter__',
        },
        {
            message: 'Use the exponentiation operator (**) instead.',
            object: 'Math',
            property: 'pow',
        },
    ],
    'no-restricted-syntax': [
        2,
        {
            message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
            selector: 'ForInStatement',
        },
        {
            message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
            selector: 'ForOfStatement',
        },
        {
            message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
            selector: 'LabeledStatement',
        },
        {
            message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
            selector: 'WithStatement',
        },
    ],
    'no-return-assign': [2, 'except-parens'],
    'no-return-await': 2,
    'no-script-url': 2,
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-shadow': 2,
    'no-shadow-restricted-names': 2,
    'no-spaced-func': 2,
    'no-sparse-arrays': 2,
    'no-tabs': 2,
    'no-template-curly-in-string': 2,
    'no-ternary': 0, // ternaries are ok...  in moderation
    'no-this-before-super': 2,
    'no-throw-literal': 2,
    'no-trailing-spaces': 2,
    'no-undef': 2,
    'no-undef-init': 2,
    'no-undefined': 2,
    'no-underscore-dangle': [
        2,
        {
            allow: [
                '_id',
                '_index',
                '_score',
                '_shards',
                '_source',
                '_type',
            ],
        },
    ],
    'no-unexpected-multiline': 2,
    'no-unmodified-loop-condition': 0, // let the devs develop, if necessary, this is fine...
    'no-unneeded-ternary': [2, { defaultAssignment: false }],
    'no-unreachable': 2,
    'no-unsafe-finally': 2,
    'no-unsafe-negation': 2,
    'no-unused-expressions': [
        2,
        {
            allowShortCircuit: false,
            allowTaggedTemplates: false,
            allowTernary: false,
        },
    ],
    'no-unused-labels': 2,
    'no-unused-vars': [2, { args: 'after-used', ignoreRestSiblings: true, vars: 'local' }],
    'no-use-before-define': [2, { classes: true, functions: true, variables: true }],
    'no-useless-call': 2,
    'no-useless-computed-key': 2,
    'no-useless-concat': 2,
    'no-useless-constructor': 2,
    'no-useless-escape': 2,
    'no-useless-rename': [
        2,
        {
            ignoreDestructuring: false,
            ignoreExport: false,
            ignoreImport: false,
        },
    ],
    'no-useless-return': 2,
    'no-var': 2,
    'no-void': 2,
    'no-warning-comments': [
        2,
        {
            location: 'start',
            terms: ['todo', 'fixme', 'xxx'],
        },
    ],
    'no-whitespace-before-property': 2,
    'no-with': 2,
    'nonblock-statement-body-position': [2, 'beside'], // single line statements should be on the same line as their qualifier
    'object-curly-newline': 0, // let the dev decide what format works best for curly newlines
    'object-curly-spacing': [2, 'always'],
    'object-property-newline': [2, { allowMultiplePropertiesPerLine: true }],
    'object-shorthand': [2, 'always', { avoidQuotes: true, ignoreConstructors: false }],
    'one-var': [2, 'never'],
    'one-var-declaration-per-line': [2, 'always'],
    'operator-assignment': [2, 'always'],
    'operator-linebreak': [2, 'after', { overrides: { ':': 'before', '?': 'before' } }],
    'padded-blocks': [2, 'never'],
    'prefer-arrow-callback': [2, { allowNamedFunctions: false, allowUnboundThis: true }],
    'prefer-const': [2, { destructuring: 'any', ignoreReadBeforeAssign: true }],
    'prefer-destructuring': [
        2,
        { array: true, object: true },
        { enforceForRenamedProperties: false },
    ],
    'prefer-numeric-literals': 2,
    'prefer-promise-reject-errors': [0, { allowEmptyReject: true }],
    'prefer-rest-params': 2,
    'prefer-spread': 2,
    'quote-props': [
        2,
        'as-needed',
        {
            keywords: false,
            numbers: false,
            unnecessary: true,
        },
    ],
    quotes: [2, 'single', { avoidEscape: true }],
    radix: 2,
    'require-await': 2, // async functions should contain await calls...
    'require-jsdoc': 0, // not required -- let devs decide what needs to be documented
    'require-yield': 2,
    'rest-spread-spacing': [2, 'never'],
    semi: [2, 'always'],
    'semi-spacing': [2, { after: true, before: false }],
    'sort-imports': 0, // dont configure this here -- import plugin is more powerful
    'sort-keys': [
        0,
        'asc',
        {
            caseSensitive: false,
            natural: true,
        },
    ],
    'sort-vars': [2, { ignoreCase: true }],
    'space-before-blocks': 2,
    'space-before-function-paren': [
        2,
        {
            anonymous: 'always',
            asyncArrow: 'always',
            named: 'never',
        },
    ],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': [
        2,
        {
            nonwords: false,
            overrides: {},
            words: true,
        },
    ],
    'spaced-comment': [
        2,
        'always',
        {
            block: {
                balanced: false,
                exceptions: ['-', '+', ':', '::'],
                markers: ['=', '!'],
            },
            line: {
                exceptions: ['-', '+', ':', '::'],
                markers: ['=', '!'],
            },
        },
    ],
    strict: 2,
    'symbol-description': 2,
    'template-curly-spacing': 2,
    'template-tag-spacing': [2, 'never'],
    'unicode-bom': ['error', 'never'],
    'use-isnan': 2,
    'valid-jsdoc': 0, // disable jsdoc checks in favor of flow
    'valid-typeof': [2, { requireStringLiterals: true }],
    'vars-on-top': 2,
    'wrap-iife': [2, 'outside', { functionPrototypeMethods: false }],
    'wrap-regex': 2,
    'yield-star-spacing': [2, 'after'],
    yoda: 2,
};


const importRules = {
    'import/no-extraneous-dependencies': [
        2, {
            devDependencies: [
                '**/__mock__/**',
                '**/.eslintrc.js',
                '**/*.test.js',
                'config/**',
                'jest*.config.js',
                'scripts/**',
                'webpack*.config.js',
            ],
            optionalDependencies: false,
            peerDependencies: false,
        },
    ],
};

module.exports = {
    env: {
        es6: true,
        jest: true,
    },
    parser: 'babel-eslint',
    plugins: ['babel', 'import'],
    rules: Object.assign({}, rules, importRules),
    settings: {},
    overrides: [
        {
            files: ['**/*.test.js'],
            rules: {
                'no-undefined': 0,
                'global-require': 0,
            },
        },
    ],
};
