# @fishtech/eslint-config

Fishtech's shareable eslint configuration

There are two configurations in this shareable config:

* `node` is meant for server-side JavaScript development
* `react` is meant for client side React/JSX development

## Installation

_Note: Before performing these steps, you must be able to clone a repository
from the GitHub FishtechCSOC group usings its HTTPS link._

To install, use `npm` to install directly from GitHub:

```
$ npm i FishtechCSOC/eslint-config-fishtech
```

### SEMVER VERSIONS FOR GIT PACKAGES

As of [npm v5.0.0](https://github.com/npm/npm/releases/tag/v5.0.0), semver values are supported when using npm to install git repositories.

To install with a semver string, use the following syntax:

```
$ npm i FishtechCSOC/eslint-config-fishtech#semver:^2.0.0
```

Remember to install the dependencies!

```
$ npm install eslint babel-eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
```

**NOTE: As of `npm 5.4.1` (and in `5.4.2`) semver for git packages is broken -- until this is fixed you will need to use npm 5.4.0 if using the above syntax. This is being tracked in the npm repository in [issue #18434](https://github.com/npm/npm/issues/18434)**

## eslint rules

This section lists enabled eslint settings. Where useful, examples will also be
provided.

### Error Rules

The rules in this section will produce an error. The exit code of the `eslint`
process will be the number of errors produced during linting.

#### array-bracket-spacing

[http://eslint.org/docs/rules/array-bracket-spacing](http://eslint.org/docs/rules/array-bracket-spacing)

Array brackets should never have spaces inside.

##### array-bracket-spacing Examples

Examples of **incorrect** code:

```javascript
const arr = ["foo", "bar"];
const [x, y] = z;
```

Examples of **correct** code:

```javascript
const arr = ["foo", "bar"];
const [x, y] = z;
```

#### array-callback-return

[http://eslint.org/docs/rules/array-callback-return](http://eslint.org/docs/rules/array-callback-return)

Callbacks passed to `Array.prototype` functions should have a return statement.

##### array-callback-return Examples

Examples of **incorrect** code:

```javascript
const x = [1,2,3];
let y = x.map((i) => {
    const y = i+1;
};
```

Examples of **correct** code:

```javascript
const x = [1, 2, 3];

let y = x.map(i => i + 1);

y = x.map(i => {
  return i + 1;
});
```

#### arrow-spacing

[http://eslint.org/docs/rules/arrow-spacing](http://eslint.org/docs/rules/arrow-spacing)

An arrow function's arrow (`=>`) should always have a space before and after.

#### block-scoped-var

[http://eslint.org/docs/rules/block-scoped-var](http://eslint.org/docs/rules/block-scoped-var)

`error`

Variables should never be used outside of the block in which they were defined.

##### block-scoped-var examples

Example of **incorrect** usage

```javascript
function doThisThing() {
  if (true) {
    var isTrue = true;
  }
  console.log(isTrue); // isTrue variable was defined in the above 'if'
}
```

Example of **correct** usage

```javascript
function doThisThing() {
  var isTrue;
  if (true) {
    isTrue = true;
  }
  console.log(isTrue); // isTrue variable was defined outside of the 'if'
}
```

#### block-spacing

[http://eslint.org/docs/rules/block-spacing](http://eslint.org/docs/rules/block-spacing)

`[error, always]`

Code blocks should never be padded with empty lines.

#### brace-style

[http://eslint.org/docs/rules/brace-style](http://eslint.org/docs/rules/brace-style)

`[error, '1tbs', {allowSingleLine: true}]`

Follow _one true brace style_ guidelines, in which the opening brace is placed
on the same line as its corresponding statement or declaration. Closing brace
should be placed on the line directly following the last statement in the block.

If a braced block only contains a single statement, both braces and the
statement may all be placed on the same line.

##### brace-style examples

Examples of **correct** usage

```javascript
if (foo) {
  bar();
}

if (foo) {
  bar;
}
```

#### class-methods-use-this

[http://eslint.org/docs/rules/class-methods-use-this](http://eslint.org/docs/rules/class-methods-use-this)

Unless specific exceptions are added, class methods should always contain a
usage of the `this` variable.

##### node config: class-methods-use-this

`error`

When writing server-side JavaScript, class methods should _always_ contain a
usage of `this`.

##### react config: class-methods-use-this

```text
[error, {
    exceptMethods: ['render', 'getInitialState', 'getDefaultProps', 'getChildContext',
        'componentWillMount', 'componentDidMount', 'componentWillReceiveProps',
        'shouldComponentUpdate', 'componentWillUpdate', 'componentDidUpdate',
        'componentWillUnmount'
    ]
}]
```

In the react rules bundle, class methods should always contain a usage of
`this`. If there is no usage of `this`, the method can be moved outside of the
`class` definition.

#### comma-dangle

[http://eslint.org/docs/rules/comma-dangle](http://eslint.org/docs/rules/comma-dangle)

```text
[error, {
    arrays: 'always-multiline',
    objects: 'always-multiline',
    imports: 'always-multiline',
    exports: 'always-multiline',
    functions: 'always-multiline',
  }],
```

Trailing commas are _required_ when the last element or property is on a
_different_ line than the closing bracket.

Traling commas are _prohibited_ when the last element or property is on the same
line as the closing bracket.

#### comma-spacing

[http://eslint.org/docs/rules/comma-spacing](http://eslint.org/docs/rules/comma-spacing)

```text
[error, {
    before: false,
    after: true
  }]
```

Spaces are _prohibited_ before a comma and _required_ after a comma.

#### comma-style

[http://eslint.org/docs/rules/comma-style](http://eslint.org/docs/rules/comma-style)

`[error, last]`

Commas are required after and on the same line as an array element or object
property.

#### computed-property-spacing

[http://eslint.org/docs/rules/computed-property-spacing](http://eslint.org/docs/rules/computed-property-spacing)

`[error, never]`

Spaces inside of computed property brackets are prohibited.

##### computed-property-spacing examples

```javascript
const obj = { a: 1, b: 2 };
const key = "a";
// Not allowed
const val1 = obj[key];
const val2 = obj["b"];

// Allowed
const val3 = obj[key];
const val4 = obj["b"];
```

#### consistent-return

[http://eslint.org/docs/rules/consistent-return](http://eslint.org/docs/rules/consistent-return)

`error`

Return statements all return values or all return no values.

#### constructor-super

[http://eslint.org/docs/rules/constructor-super](http://eslint.org/docs/rules/constructor-super)

`error`

Constructor methods are required to call the `super()` function.

#### curly

[http://eslint.org/docs/rules/curly](http://eslint.org/docs/rules/curly)

`[error, 'multi-line']`

This rule requires that block statements are wrapped in curly braces. Blocks
with a single statement do not require braces.

#### dot-location

[http://eslint.org/docs/rules/dot-location](http://eslint.org/docs/rules/dot-location)

`[error, 'property']`

When a reference to an object property spans multiple lines, the dot should be
on the line with the property.

##### dot-location example

```javascript
const a = { b: { c: "value" } };
// Not allowed
const value1 = a.b.c;

// Allowed
const value2 = a.b.c;
```

#### dot-notation

[http://eslint.org/docs/rules/dot-notation](http://eslint.org/docs/rules/dot-notation)

```text
[error, {
    allowKeywords: true
  }]
```

Whenever possible, dot-notation should be used to reference object properties.

If the property name is a reserved word, bracket notation can be used instead.

### Warning Rules

The rules in this section will produce messages, but when found during linting,
the exit code of the `eslint` process will still be 0 (i.e., `success`)

#### complexity

[http://eslint.org/docs/rules/complexity](http://eslint.org/docs/rules/complexity)

`[warn, 15]`

If cyclomatic complexity of a function or method is greater than 15, a warning
will be generated.

### Disabled Rules

* [http://eslint.org/docs/rules/accessor-pairs](http://eslint.org/docs/rules/accessor-pairs)
* [http://eslint.org/docs/rules/array-bracket-newline](http://eslint.org/docs/rules/array-bracket-newline)
* [http://eslint.org/docs/rules/array-element-newline](http://eslint.org/docs/rules/array-element-newline)
* [http://eslint.org/docs/rules/arrow-body-style](http://eslint.org/docs/rules/arrow-body-style)
* [http://eslint.org/docs/rules/arrow-parens](http://eslint.org/docs/rules/arrow-parens)
* [http://eslint.org/docs/rules/callback-return](http://eslint.org/docs/rules/callback-return)
* [http://eslint.org/docs/rules/capitalized-comments](http://eslint.org/docs/rules/capitalized-comments)
* [http://eslint.org/docs/rules/consistent-this](http://eslint.org/docs/rules/consistent-this)

## Usage

Use like a standard shareable eslint config. Just add `extends: 'eslint-config-fishtech'`
(or one of the other usages below) to your eslint configuration.

### JavaScript Configuration Usage

Use the below syntax to use `eslint-config-fishtech` in a JavaScript eslint
configuration (`.eslintrc.js`) file.

#### Default Usage

```javascript
// .eslintrc.js
module.exports = {
  extends: "@fishtech/eslint-config"
};
```

#### React Usage

```javascript
// .eslintrc.js
module.exports = {
  extends: "@fishtech/eslint-config/react"
};
```

#### Node Usage

```javascript
// .eslintrc.js
module.exports = {
  extends: "@fishtech/eslint-config/node"
};
```

### JSON Configuration Usage

Use the below syntax to use `@fishtech/eslint-config` in a JavaScript eslint
configuration (`.eslintrc` or `.eslintrc.json`).

#### Default Usage

```json
// .eslintrc.js
{
    "extends": "@fishtech/eslint-config"
};
```

#### React Usage

```json
// .eslintrc.js
{
    "extends": "@fishtech/eslint-config/react"
};
```

#### Node Usage

```json
// .eslintrc.js
{
    "extends": "@fishtech/eslint-config/node"
};
```
