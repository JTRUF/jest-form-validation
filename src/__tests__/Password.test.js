const fns = require('../utils/functions');

test('empty string fails username validation', () =>
{
    // arrange/act
    let result = fns.validateUsername('');
    expect(result).toBeFalsy();
});
test('string with space fails username validation', () =>
{
    // arrange/act
    let result = fns.validateUsername('joe mama');
    expect(result).toBeFalsy();
});
test('less than 6 characters fails username validation', () =>
{
    // arrange/act
    let result = fns.validateUsername('abcd');
    expect(result).toBeFalsy();
});
test('joe_mama username passes validation', () =>
{
    // arrange/act
    let result = fns.validateUsername('joe_mama');
    expect(result).toBeTruthy();
});