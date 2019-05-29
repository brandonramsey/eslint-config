const base = require('./node');
const config = Object.assign({}, base);
config.env.node = true;
config.rules['no-console'] = 0;
config.rules['import/prefer-default-export'] = 'off';

module.exports = config;
