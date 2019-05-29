let reactConfig;

describe('/lib/react.js configuration module', () => {
    test('module loads successfully', () => {
        reactConfig = require('./react');
    });
    test('exports an object', () => {
        expect(typeof reactConfig).toBe('object');
    });
    test('exports a rules key', () => {
        expect(reactConfig.rules).toBeDefined();
    });
    test('exports an env key', () => {
        expect(reactConfig.env).toBeDefined();
    });
    test('exports a plugins key', () => {
        expect(reactConfig.plugins).toBeDefined();
    });
    test('defined plugins, if any, should be strings', () => {
        reactConfig.plugins.forEach(p => expect(typeof p).toBe('string'));
    });
    test('exports a parser key', () => {
        expect(typeof reactConfig.parser).toBe('string');
    });
    test('exports a settings key', () => {
        expect(reactConfig.settings).toBeDefined();
    });
});
