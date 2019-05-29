![ci-badge-dependencies](./badges/dependencies-badge.svg) 
![ci-badge-lastdeploy](./badges/lastdeploy-badge.svg) ![ci-badge-version](./badges/version-badge.svg) 
## [7.0.0] - 2019-04-23 
### Changed
- **[`BREAKING`] change package name**: changed npm package name from `eslint-config-fishtech` to `@fishtech/eslint-config` -- will require update of eslint config to point toward new configuration location.

## [6.0.0] - 2019-01-25 
### Fixed
- **eslint-plugin-react warnings when running node or lambda configs**: When running the node/lambda configs in a non-react project, eslint spits a bunch of warnings: `Warning: React version was set to "detect" in eslint-plugin-react settings, but the "react" package is not installed. Assuming latest React version for linting.`. Removed the react:version configuration from base config and added to react config, so it only gets added when the react rule set is specified.

### Changed
- **`[BREAKING]` The _lambda_ rule config now inherits from _node_ config instead of the _react_**: This just makes more sense, but *will* probably cause some unexpected changes to the lint results in functions using the `fishtech/lambda` ruleset.
- **`[BREAKING]` Default ruleset now exports `node` config instead of `lambda` config**: Seems like a more reasonable default, and we're moving toward more nodeJS focus, anyways. Will break anyone using the ruleset as `extends: "fishtech"` (as opposed to `extends: "fishtech/lambda"`) -- I don't think there are many, if any, modules doing this though, so shouldn't be a huge issue.

### Chores
- **Update `eslint` peerDependency version**: Just to ensure all plugins work as expected in projects that use this config
- **Major Update: jest v23 => v24**

## [UNRELEASED]
### Fixed
- **eslint-plugin-react warnings when running node or lambda configs**: When running the node/lambda configs in a non-react project, eslint spits a bunch of warnings: `Warning: React version was set to "detect" in eslint-plugin-react settings, but the "react" package is not installed. Assuming latest React version for linting.`. Removed the react:version configuration from base config and added to react config, so it only gets added when the react rule set is specified.

### Changed
- **`[BREAKING]` The _lambda_ rule config now inherits from _node_ config instead of the _react_**: This just makes more sense, but *will* probably cause some unexpected changes to the lint results in functions using the `fishtech/lambda` ruleset.
- **`[BREAKING]` Default ruleset now exports `node` config instead of `lambda` config**: Seems like a more reasonable default, and we're moving toward more nodeJS focus, anyways. Will break anyone using the ruleset as `extends: "fishtech"` (as opposed to `extends: "fishtech/lambda"`) -- I don't think there are many, if any, modules doing this though, so shouldn't be a huge issue.

### Chores
- **Update `eslint` peerDependency version**: Just to ensure all plugins work as expected in projects that use this config
- **Major Update: jest v23 => v24**

## [5.3.0] - 2019-01-25 
### Changed
- **Disable `global-require` and `no-undefined` rules in test files**: These patterns are sometimes helpful when implementing tests -- now you can use them without an eslint-disable statement.

## [5.2.0] - 2019-01-24 
### Changed
- **Change default react version to _"detect"_**: Should eliminate the errors during eslint: `Warning: React version not specified in eslint-plugin-react settings. See https://github.com/yannickcr/eslint-plugin-react#configuration.`

### Chores
- **Update minor dependency versions**: eslint: 5.6.1 => 5.12.1; eslint-plugin-babel: 5.2.1 => 5.3.0; eslint-plugin-import: 2.14.0 => 2.15.0; eslint-plugin-react: 7.11.1 => 7.12.4

## [5.1.0] - 2018-11-29 
### Changed
- **Turned off the `prefer-template` rule**: This one forces you to use JavaScript template strings instead of concatenation when you're mixing variables and strings, but sometimes, it just looks better to concat!

## [5.0.0] - 2018-10-08 
### Changed
- Updated `eslint` peerDependency to 5.x
- Removed unnecessary peerDependencies

## [4.3.0] - 2018-05-26 
### Changed
- Update `import/no-extraneous-dependencies` rule to allow devDependencies to be used in `jest*.config.js` files #68
- Update `import/no-extraneous-dependencies` rule to allow devDependencies to be used in `config/**` files #68
- Update `import/no-extraneous-dependencies` rule to allow devDependencies to be used in `.eslintrc.js` files #68
- Disable `multiline-ternary` rule to stop forcing such specific #68

## [4.2.2] - 2018-04-13 
### Changed
- babel-eslint 8.0.2 => 8.2.2
- eslint 4.11.0 => 4.19.1
- eslint-plugin-babel 4.1.2 => 5.0.0
- eslint-plugin-import 2.8.0 => 2.10.0
- eslint-plugin-jsx-a11y 6.0.2 => 6.0.3
- jest 21.2.1 =. 22.4.3
- eslint-plugin-react 7.5.1 => 7.7.0
- Update peerDependency versions
- Formatting
- Add `npm run checks` command to run all CI checks
- Just exit 0 on build/deploy.
- Add engineering group as a default code owner

### Removed
- Remove unused publishConfig

## [4.2.1] - 2018-04-10 
### Added
- CI Scripts: coverage, build, deploy
- Requirement for 100% test coverage

### Fixed
- Bad syntax on jsx-indent-props configuration

## [4.2.0] - 2018-03-27 
### Added
- CI Scripts: coverage, build, deploy
- Requirement for 100% test coverage

### Fixed
- Bad syntax on jsx-indent-props configuration

Change Log: eslint-config-fishtech
================================================================================

3.1.1
--------------------------------------------------------------------------------
### Rule config change
* Disabled `no-invalid-this` rule. This rule does not currently work properly with Babel and will give false positives.
* Added `babel/no-invalid-this`, which will replace no-invalid-this until eslint is updated.

2.3.1
--------------------------------------------------------------------------------
### Rule config changes
* Disabled `sort-keys` rule. This rule made it difficult to structure an object (especially deeply nested) in an easily readable/understandable format. Leaving this to be the developer's judgement call.
* Disabled `no-console` rule for node. Console statements are used on the server side for logging, both in containers and in Lambda/serverless.

2.3.0
--------------------------------------------------------------------------------
### Rule config changes
* Updated `no-underscore-dangle` configuration to allow additional variable names `_shards` and `score`
These are ElasticSearch built-ins that we can't change.

2.2.0
--------------------------------------------------------------------------------
### Highlighted Changes
#### Version Update
Because the **highest** version of the package on NPM is *2.2.0* but the **latest** published version is *2.0.1*, we were seeing some inconsistent behavior when doing an npm install of the package. Updating to 2.2.0 should resolve this.
#### Magic Number Whitelist Increased
The magic number rule is a pain -- we should probably look at removing it altogether and just relying on the developer to make sound decisions.  But for now, we've extended the whitelist to cut down on eslint complaints.

### Rule config changes
* Updated magic number whitelist. Acceptable magic numbers are now _0, -1, 1,
	2, 3, 4, 5, 6, 7, 8, 9, 10, 100, and 1000_

### Chores
* Change `.npmrc` configuration for `@fishtech` namespace to point to `http://npm.ftg.cloud:4873`
* Update `package.json/version` version to `2.2.0`
* Change `package.json/publishConfig.regsitry` to `http://npm.ftg.cloud:4873`

- - -

2.0.0
--------------------------------------------------------------------------------
### Rule config changes
* Enabled *LOTS* of rules in `base.js` which is why this is a breaking change.

### Chores
* Get rid of `constants.js` file -- it just complicates things without adding value


1.3.0
--------------------------------------------------------------------------------
### Rule config changes
* Update `spaced-comment` config to allow `flow` comments (resolves #38)

### Fixes
* Fix issue with `no-underscore-dangle` configuration

1.2.0
--------------------------------------------------------------------------------
### Rule config changes
* Allow dangling underscores for some variable names that we receive from ElasticSearch (resolves #36)

### Fixes
* Resolved issue with configs not exporting full config objects

1.1.0
--------------------------------------------------------------------------------
### Rule config changes
* Add support for experimental decorators
* Set required JSX index to 4 spaces
* Extend maximum line length to 1000 characters
* Remove deprecated `react/jsx-space-before-closing` rule

### Other config changes
* Set `babel-eslint` as parser for both node and react configs

### Miscellaneous
* Add `.vscode/` to `.gitignore` file
* Add `.npmrc` file to repository so publish will always go to correct location

1.0.0
--------------------------------------------------------------------------------
Initial release
