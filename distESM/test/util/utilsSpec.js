import * as utils from '../../src/util/utils';
import { expect } from 'chai';
describe('deepEquals', () => {
    it('compares two primitive values', () => {
        expect(utils.deepEquals('A', 'B'))
            .to.equal(false);
        expect(utils.deepEquals('A', 'A'))
            .to.equal(true);
        expect(utils.deepEquals(1, 2))
            .to.equal(false);
        expect(utils.deepEquals(1, 1))
            .to.equal(true);
        expect(utils.deepEquals(1.2, 2.1))
            .to.equal(false);
        expect(utils.deepEquals(2.1, 2.1))
            .to.equal(true);
    });
    it('compares two different simple objects', () => {
        const a = { name: 'Wolfram' };
        const b = { name: 'Egon' };
        expect(utils.deepEquals(a, b))
            .to.equal(false);
    });
    it('compares two equal simple objects', () => {
        const a = { name: 'Wolfram' };
        const b = { name: 'Wolfram' };
        expect(utils.deepEquals(a, b))
            .to.equal(true);
    });
    it('compares two different arrays', () => {
        const a = ['a', 'b'];
        const b = ['a', 'c'];
        expect(utils.deepEquals(a, b))
            .to.equal(false);
    });
    it('compares two equal arrays', () => {
        const a = ['a', 'b'];
        const b = ['a', 'b'];
        expect(utils.deepEquals(a, b))
            .to.equal(true);
    });
    it('compares two different complex objects', () => {
        const a = {
            x: 'y',
            a: ['b', {
                    q: 'f'
                }]
        };
        const b = {
            x: 'y',
            a: ['b', {
                    q: 'x'
                }]
        };
        expect(utils.deepEquals(a, b))
            .to.equal(false);
    });
    it('compares two equal complex objects', () => {
        const a = {
            x: 'y',
            a: ['b', {
                    q: 'f'
                }]
        };
        const b = {
            x: 'y',
            a: ['b', {
                    q: 'f'
                }]
        };
        expect(utils.deepEquals(a, b))
            .to.equal(true);
    });
    it('a complex object and a primitive', () => {
        const a = {
            x: 'y',
            a: ['b', {
                    q: 'f'
                }]
        };
        expect(utils.deepEquals(a, 44))
            .to.equal(false);
        expect(utils.deepEquals(a, false))
            .to.equal(false);
        expect(utils.deepEquals(a, 44.44))
            .to.equal(false);
        expect(utils.deepEquals(a, 'primitive'))
            .to.equal(false);
        expect(utils.deepEquals(44, a))
            .to.equal(false);
        expect(utils.deepEquals(false, a))
            .to.equal(false);
        expect(utils.deepEquals(44.44, a))
            .to.equal(false);
        expect(utils.deepEquals('primitive', a))
            .to.equal(false);
    });
    it('handles undefined', () => {
        const a = {
            x: 'y',
            a: ['b', {
                    q: 'f'
                }]
        };
        expect(utils.deepEquals(a, undefined))
            .to.be.equal(false);
        expect(utils.deepEquals(undefined, a))
            .to.be.equal(false);
    });
    it('handles empty objects', () => {
        const a = {
            firstname: 'Wolfram'
        };
        expect(utils.deepEquals(a, {}))
            .to.equal(false);
        expect(utils.deepEquals({}, a))
            .to.equal(false);
    });
    it('finds additional paths on objB', () => {
        const a = {
            a: 'b'
        };
        const b = {
            a: 'b',
            c: 'd'
        };
        expect(utils.deepEquals(a, b))
            .to.be.equal(false);
        expect(utils.deepEquals(b, a))
            .to.be.equal(false);
    });
});
describe('deepCopy', () => {
    it('copies primitives', () => {
        expect(utils.deepCopy('bla'))
            .to.equal('bla');
        expect(utils.deepCopy(42))
            .to.equal(42);
    });
    it('copies arrays', () => {
        const original = ['a', 'b', 2];
        const copy = utils.deepCopy(original);
        expect(copy)
            .to.deep.equal(original);
    });
    it('copies objects', () => {
        const original = {
            firstname: 'Wolfram',
            lastname: ' Hempel'
        };
        const copy = utils.deepCopy(original);
        expect(copy)
            .to.deep.equal(original);
    });
    it('copies objects with null values', () => {
        const original = {
            firstname: 'Wolfram',
            lastname: null
        };
        const copy = utils.deepCopy(original);
        expect(copy)
            .to.deep.equal(original);
        expect(copy.lastname)
            .to.be.a('null');
    });
    it('copies null values', () => {
        expect(utils.deepCopy(null))
            .to.be.a('null');
    });
    it('copies nested values', () => {
        const original = {
            a: {
                b: 'c',
                d: 4
            }
        };
        const copy = utils.deepCopy(original);
        expect(original)
            .to.deep.equal(copy);
        expect(original.a)
            .to.deep.equal(copy.a);
    });
    it('copies nested arrays', () => {
        const original = {
            a: {
                b: 'c',
                d: ['a', {
                        x: 'y'
                    }]
            }
        };
        const copy = utils.deepCopy(original);
        expect(original)
            .to.deep.equal(copy);
        expect(original.a.d)
            .to.deep.equal(copy.a.d);
        expect(Array.isArray(copy.a.d))
            .to.equal(true);
        expect(copy.a.d[1])
            .to.deep.equal({ x: 'y' });
        expect(original.a.d[1] === copy.a.d[1])
            .to.equal(false);
    });
    // This is a JSON.stringify specific behaviour. Not too sure it's ideal,
    // but it is something that will break behaviour when changed, so let's
    // keep an eye on it
    it('converts undefined', () => {
        let copy = utils.deepCopy([undefined]);
        expect(copy[0])
            .to.be.a('null');
        copy = utils.deepCopy({
            x: undefined
        });
        expect(copy)
            .to.deep.equal({});
    });
});
describe('shallowCopy', () => {
    it('copies primitives', () => {
        expect(utils.shallowCopy('bla'))
            .to.equal('bla');
        expect(utils.shallowCopy(42))
            .to.equal(42);
    });
    it('copies arrays', () => {
        const original = ['a', 'b', 2];
        const copy = utils.shallowCopy(original);
        expect(copy)
            .to.deep.equal(original);
    });
    it('copies objects', () => {
        const original = {
            firstname: 'Wolfram',
            lastname: ' Hempel'
        };
        const copy = utils.shallowCopy(original);
        expect(copy)
            .to.deep.equal(original);
    });
    it('copies objects with null values', () => {
        const original = {
            firstname: 'Wolfram',
            lastname: null
        };
        const copy = utils.shallowCopy(original);
        expect(copy)
            .to.deep.equal(original);
    });
    it('handles empty objects', () => {
        const copy = utils.shallowCopy({});
        expect(copy).to.deep.equal({});
    });
    it('throws error on null values', () => {
        expect(() => {
            utils.shallowCopy(null);
        }).to.throw('Cannot convert undefined or null to object');
    });
});
describe('trim', () => {
    it('removes various kinds of whitespace from Strings having String.prototype.trim polyfill', () => {
        expect(utils.trim('   '))
            .to.equal('');
        expect(utils.trim(''))
            .to.equal('');
        expect(utils.trim('a    '))
            .to.equal('a');
        expect(utils.trim('   b    '))
            .to.equal('b');
        expect(utils.trim('   c d    '))
            .to.equal('c d');
    });
    it('removes various kinds of whitespace from string having no String.prototype.trim polyfill', () => {
        const stringTrim = String.prototype.trim;
        delete String.prototype.trim;
        expect(utils.trim('   '))
            .to.equal('');
        expect(utils.trim(''))
            .to.equal('');
        expect(utils.trim('a    '))
            .to.equal('a');
        expect(utils.trim('   b    '))
            .to.equal('b');
        expect(utils.trim('   c d    '))
            .to.equal('c d');
        String.prototype.trim = stringTrim;
    });
});
describe('normalizeSetArguments', () => {
    it('normalizes argument list containing only a data argument as object', () => {
        const argumentsSet = utils.normalizeSetArguments([{ title: 'awesome post' }]);
        expect(argumentsSet).to.deep.equal({
            path: undefined,
            data: {
                title: 'awesome post'
            },
            callback: undefined
        });
    });
    it('normalizes argument list containing only a data argument as array', () => {
        const argumentsSet = utils.normalizeSetArguments([[1, 2, 3, 4]]);
        expect(argumentsSet).to.deep.equal({
            path: undefined,
            data: [1, 2, 3, 4],
            callback: undefined
        });
    });
    it('normalizes argument list containing only a data and a callback argument', () => {
        const argumentsSet = utils.normalizeSetArguments([
            { title: 'awesome post' },
            () => { }
        ]);
        expect(argumentsSet)
            .to.have.property('path')
            .to.equal(undefined);
        expect(argumentsSet)
            .to.have.property('data')
            .to.deep.equal({
            title: 'awesome post'
        });
        expect(argumentsSet)
            .to.have.property('callback')
            .to.be.a('function');
    });
    it('normalizes argument list containing only a path and a data argument as primitive', () => {
        let argumentsSet = utils.normalizeSetArguments(['title', 'awesome post']);
        expect(argumentsSet).to.deep.equal({
            path: 'title',
            data: 'awesome post',
            callback: undefined
        });
        argumentsSet = utils.normalizeSetArguments(['version', 123]);
        expect(argumentsSet).to.deep.equal({
            path: 'version',
            data: 123,
            callback: undefined
        });
        argumentsSet = utils.normalizeSetArguments(['liked', true]);
        expect(argumentsSet).to.deep.equal({
            path: 'liked',
            data: true,
            callback: undefined
        });
    });
    it('normalizes argument list contaning a path, a data and a callback argument', () => {
        const argumentsSet = utils.normalizeSetArguments([
            'post',
            { title: 'awesome post' },
            () => { }
        ]);
        expect(argumentsSet)
            .to.have.property('path')
            .to.equal('post');
        expect(argumentsSet)
            .to.have.property('data')
            .to.deep.equal({
            title: 'awesome post'
        });
        expect(argumentsSet)
            .to.have.property('callback')
            .to.be.a('function');
    });
    it('normalizes argument list contaning a path, a data and a callback argument with a start index', () => {
        const argumentsSet = utils.normalizeSetArguments([
            {},
            'post',
            { title: 'awesome post' },
            () => { }
        ], 1);
        expect(argumentsSet)
            .to.have.property('path')
            .to.equal('post');
        expect(argumentsSet)
            .to.have.property('data')
            .to.deep.equal({
            title: 'awesome post'
        });
        expect(argumentsSet)
            .to.have.property('callback')
            .to.be.a('function');
    });
    it('throws error on an empty argument list', () => {
        expect(() => {
            utils.normalizeSetArguments([]);
        }).to.throw('Invalid set arguments');
    });
    it('throws error on an argument list containing an invalid data argument', () => {
        expect(() => {
            utils.normalizeSetArguments([undefined]);
        }).to.throw();
        expect(() => {
            utils.normalizeSetArguments([() => { }]);
        }).to.throw();
        expect(() => {
            utils.normalizeSetArguments([134, () => { }]);
        }).to.throw();
    });
    it('throws error on an argument list contaning an invalid path argument', () => {
        expect(() => {
            utils.normalizeSetArguments([
                undefined, { title: 'awesome post' }
            ]);
        }).to.throw();
        expect(() => {
            utils.normalizeSetArguments([
                '', { title: 'awesome post' }
            ]);
        }).to.throw();
        expect(() => {
            utils.normalizeSetArguments([
                null, { title: 'awesome post' }
            ]);
        }).to.throw();
    });
    it('throws error on an argument list containing an invalid callback argument', () => {
        expect(() => {
            utils.normalizeSetArguments([
                'title', 'awesome post', null
            ]);
        }).to.throw('Invalid set callback argument');
        expect(() => {
            utils.normalizeSetArguments([
                'title', 'awesome post', {}
            ]);
        }).to.throw('Invalid set callback argument');
        expect(() => {
            utils.normalizeSetArguments([
                'title', 'awesome post', []
            ]);
        }).to.throw('Invalid set callback argument');
        expect(() => {
            utils.normalizeSetArguments([
                'title', 'awesome post', 1
            ]);
        }).to.throw('Invalid set callback argument');
        expect(() => {
            utils.normalizeSetArguments([
                'title', 'awesome post', false
            ]);
        }).to.throw('Invalid set callback argument');
    });
});
describe('normalizeArguments', () => {
    it('normalizes argument list contaning an object', () => {
        const argumentSet = utils.normalizeArguments([{
                path: 'title',
                callback: () => { },
                triggerNow: false
            }]);
        expect(argumentSet)
            .to.have.property('path')
            .to.equal('title');
        expect(argumentSet)
            .to.have.property('callback')
            .to.be.a('function');
        expect(argumentSet)
            .to.have.property('triggerNow')
            .to.equal(false);
    });
    it('normalizes argument list contaning path, callback and triggerNow arguments', () => {
        const argumentSet = utils.normalizeArguments([
            true, () => { }, 'title'
        ]);
        expect(argumentSet)
            .to.have.property('path')
            .to.equal('title');
        expect(argumentSet)
            .to.have.property('callback')
            .to.be.a('function');
        expect(argumentSet)
            .to.have.property('triggerNow')
            .to.equal(true);
    });
    it('handles an empty arguments list', () => {
        const argumentSet = utils.normalizeArguments([]);
        expect(argumentSet)
            .to.deep.equal({});
    });
});
describe('parseUrl adds all missing parts of the url', () => {
    it('accepts no protocol and default to ws', () => {
        expect(utils.parseUrl('localhost', '/deepstream'))
            .to.equal('ws://localhost/deepstream');
    });
    it('accepts // as protocol', () => {
        expect(utils.parseUrl('//localhost:6020', '/deepstream'))
            .to.equal('ws://localhost:6020/deepstream');
    });
    it('accepts ws protocols', () => {
        expect(utils.parseUrl('ws://localhost:6020', '/deepstream'))
            .to.equal('ws://localhost:6020/deepstream');
        expect(utils.parseUrl('wss://localhost:6020', '/deepstream'))
            .to.equal('wss://localhost:6020/deepstream');
    });
    it('rejects http protocols', () => {
        expect(utils.parseUrl.bind(utils, 'http://localhost:6020', '/deepstream'))
            .to.throw('Only ws and wss are supported');
        expect(utils.parseUrl.bind(utils, 'https://localhost:6020', '/deepstream'))
            .to.throw('Only ws and wss are supported');
    });
    it('accepts full url with protocol and path and doesn\'t change it', () => {
        expect(utils.parseUrl('ws://localhost:6020/anotherdeepstream', ''))
            .to.equal('ws://localhost:6020/anotherdeepstream');
    });
    it('respects queries and hash', () => {
        expect(utils.parseUrl('localhost?query=value#login', '/deepstream'))
            .to.equal('ws://localhost/deepstream?query=value#login');
    });
    it('rejects urls with no host', () => {
        expect(utils.parseUrl.bind(utils, '', '/deepstream'))
            .to.throw('invalid url, missing host');
    });
});
//# sourceMappingURL=utilsSpec.js.map