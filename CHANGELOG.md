# Change Log: @brandonramsey/eslint-config

## [1.0.0] - 2019-05-29

Initial Release

## [2.0.0] - 2019-05-29

### Changed

- **Reduced indentation**: Reduced indentation from 4 spaces to 2

## [2.1.0] - 2020-10-27

### Fixed

#### no-void/no-undefined rules conflict #26

The no-void and no-undefined rules were both set to `ERROR`, which
caused a logical conflict.

Since ES5, undefined has been immutable, so there is no longer a
reason to use void 0 instead, other than to prevent shadowing of
`undefined` as an argument name in a function.

The `no-shadow-restricted-names` rule was already enabled and will
prevent `undefined` from being used as an argument name in
functions, so this is a non-issue.

*Additionally, no-shadow-restricted-names will prevent `NaN`,
`Infinity`, `eval`, and `arguments` from being shadowed.*
