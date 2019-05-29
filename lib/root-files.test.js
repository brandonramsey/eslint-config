const main = require('../index');
const react = require('../react');
const node = require('../node');
const lambda = require('../lambda');

describe('package root files', () => {
    describe('index file', () => {
        test('exports an object', () => {
            expect(typeof main).toBe('object');
        });
    });
    describe('react config file', () => {
        test('exports an object', () => {
            expect(typeof react).toBe('object');
        });
    });
    describe('node config file', () => {
        test('exports an object', () => {
            expect(typeof node).toBe('object');
        });
    });
    describe('lambda config file', () => {
        test('exports an object', () => {
            expect(typeof lambda).toBe('object');
        });
    });
});