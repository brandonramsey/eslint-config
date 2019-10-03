# @bramsey/eslint-config

Sensible eslint config defaults for node, serverless, and react

There are multiple configurations in this config:

* `node` is meant for server-side JavaScript development
* `react` is meant for client side React/JSX development
* `lambda` is meant for serverless JavaScript development

## Installation
This repository's package is stored on GitHub Package Repository. To install,
take the following steps:

1. In the root of your package (the same directory as `package.json`), add the
  line `@brandonramsey:registry=https://npm.pkg.github.com`, if it doesn't
  already exist.
2. Install via `npm`:
```
npm install @brandonramsey/eslint-config
```

## Usage
Use this eslint config by specifying the desired ruleset in the *extends*
property of your `.eslintrc` (or equivalent) configuration file.

You can choose the `node`, `react`, or `lambda` rule set. If no specific ruleset
is given, the `node` rule set is used.

## Examples
### .eslintrc Using node Rule Set
```json
{
  "extends": "@brandonramsey/eslint-config/node"
}
```

### .eslintrc.js Using react Rule Set
```js
module.exports = {
  extends: '@brandonramsey/eslint-config/react'
};
```

### .eslintrc.yaml Using lambda Rule Set
```yaml
extends: @brandonramsey/eslint-config/lambda
```

### .eslintrc Using node Rule Set via Defaults
```json
{
  "extends": "@brandonramsey/eslint-config"
}
```
