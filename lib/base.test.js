let baseConfig = null;
describe('/lib/node.js configuration module', () => {
    test('loads successfully', () => {
        baseConfig = require('./base');
    });
    test('exports an object', () => {
        expect(typeof baseConfig).toBe('object');
    });
    test('exports a rules key', () => {
        expect(baseConfig.rules).toBeDefined();
    });
    test('exports an env key', () => {
        expect(baseConfig.env).toBeDefined();
    });
    test('exports a plugins key', () => {
        expect(baseConfig.plugins).toBeDefined();
    });
    test('defined plugins, if any, should be strings', () => {
        baseConfig.plugins.forEach(p => expect(typeof p).toBe('string'));
    });
    test('exports a parser key', () => {
        expect(typeof baseConfig.parser).toBe('string');
    });
    test('exports a settings key', () => {
        expect(baseConfig.settings).toBeDefined();
    });
});
