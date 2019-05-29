const base = require('./base');

const nodeConfig = Object.assign({}, base);
nodeConfig.env = Object.assign({}, base.env, {
  node: true,
});
nodeConfig.rules = Object.assign({}, base.rules, {
  'global-require': 2,
  'no-console': 0,
  'no-new-require': 2,
  'no-path-concat': 2,
  'no-process-env': 0,
  'no-process-exit': 2,
  'no-sync': 1,
});
nodeConfig.plugins = [...base.plugins];

module.exports = nodeConfig;
