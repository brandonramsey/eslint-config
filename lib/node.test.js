let nodeConfig;

describe('/lib/node.js configuration module', () => {
    test('loads successfully', () => {
        nodeConfig = require('./node');
    });
    test('exports an object', () => {
        expect(typeof nodeConfig).toBe('object');
    });
    test('exports a rules key', () => {
        expect(nodeConfig.rules).toBeDefined();
    });
    test('exports an env key', () => {
        expect(nodeConfig.env).toBeDefined();
    });
    test('exports a plugins key', () => {
        expect(nodeConfig.plugins).toBeDefined();
    });
    test('defined plugins, if any, should be strings', () => {
        nodeConfig.plugins.forEach(p => expect(typeof p).toBe('string'));
    });
    test('exports a parser key', () => {
        expect(typeof nodeConfig.parser).toBe('string');
    });
    test('exports a settings key', () => {
        expect(nodeConfig.settings).toBeDefined();
    });
});
