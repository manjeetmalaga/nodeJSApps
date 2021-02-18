const log = jest.fn();
console.log = log;
const grocery = require('./');
test('outputs correct string', () => {
    expect(log.mock.calls.length).toBe(3);
    //expect(log.mock.calls[0][0]).toBe('grocery and TEST');
})