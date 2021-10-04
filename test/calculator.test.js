const _calculator= require('../app/calculator')

test('Adding two numbers', async () => {
    expect(_calculator.add(5, 5)).toStrictEqual(10)
})

test('Subtracting two numbers', async () => {
    expect(_calculator.substract(10, 5)).toStrictEqual(5)
})

test('Multiplying two numbers', async () => {
    expect(_calculator.multiply(10, 5)).toStrictEqual(50)
})