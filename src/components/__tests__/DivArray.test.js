const divArray = require('./DivArray')

test('properly test div array', () => {
    const array = [0, 0, 0]
    expect(divArray(array)).toEqual(array)
})