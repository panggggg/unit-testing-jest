const _calculatorError = require('../app/calculator-throwserror')

test('Addition: Throw Error when inputs are not numbers', async () => {
    expect(() => _calculatorError.add('5', 5)).toThrowError(
        Error('Inputs should be numbers')
    )
})

test('Subtraction: Throw Error when inputs are not numbers', async () => {
    expect(() => _calculatorError.substract('5', 5)).toThrowError(
        Error('Inputs should be numbers')
    )
})

test('Multiplytion: Throw Error when inputs are not numbers', async () => {
    expect(() => _calculatorError.multiply('5', 5)).toThrowError(
        Error('Inputs should be numbers')
    )
})